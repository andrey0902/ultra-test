import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsInputComponent),
      multi: true
    }
  ]
})
export class TagsInputComponent implements ControlValueAccessor {
  public tagList: string[] = [];
  constructor(private cd: ChangeDetectorRef) { }
  public onChange: any = () => {
  }
  public onTouched: any = () => {
  }

  public addString(input: HTMLInputElement): void {
    if (input.value !== '') {
      this.tagList.push(input.value);
      this.onChange(this.tagList);
      input.value = '';
      this.cd.detectChanges();
    }
  }

  public removeTag(index: number): void {
    this.tagList.splice(index, 1);
    this.onChange(this.tagList);
    this.cd.detectChanges();
  }

  public removeLast(input: HTMLInputElement): void {
    if (input.value === '' && this.tagList.length) {
      this.removeTag(this.tagList.length - 1);
    }
    if (input.value === '' && !this.tagList.length) {
      this.onChange([]);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string[]): void {
    if (obj) {
      this.tagList = obj;
      this.cd.detectChanges();
    }
  }
}
