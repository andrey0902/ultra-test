import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../core/services/image.service';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';
import { IImages } from '../core/models/images-model';
import { IPagination } from '../core/models/pagination-model';
import { PaginationComponent } from '../pagination/pagination/pagination.component';
import { IImageApi } from '../core/models/image-api-model';
import { searchConfig } from './search-config';
import Utils from '../helpers/utils';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListImagesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(PaginationComponent) public paginationComponent: PaginationComponent;
  public images: IImages[];
  public pagination: IPagination;
  public search: FormControl;
  public load = false;
  private destroy$: Subject<void> = new Subject<void>();
  private searchConfig = searchConfig;
  constructor(private imageService: ImageService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.createControl();
  }

  ngAfterViewInit(): void {
    this.subscribeControlValue();
  }

  private createControl(): void {
    this.search = new FormControl(null);
  }

  private subscribeControlValue(): void {
    combineLatest([this.search.valueChanges,  this.paginationComponent.
      changeCurrentPage.pipe(startWith(0))])
      .pipe(
        switchMap(([valueSearch, currentPage]) => {
          if (Utils.isEqual(this.searchConfig.q, valueSearch)) {
            this.searchConfig.offset = (currentPage as number) * this.searchConfig.limit;
          } else {
            this.searchConfig = {
              ...this.searchConfig,
              q: ([...valueSearch] as any),
              offset: 0
            };
          }
          return this.getImages(this.searchConfig);
        }))
      .subscribe((res) => {
          this.updateProperty(res);
        },
        (eror) => {
          this.load = false;
          this.cd.detectChanges();
        });
  }

  private getImages(search: any): Observable<IImageApi> {
    this.load = true;
    return this.imageService.getImages(search);

  }

  private updateProperty(res: IImageApi): void {
    this.images = res.data;
    this.pagination = res.pagination;
    this.load = false;
    this.cd.detectChanges();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
