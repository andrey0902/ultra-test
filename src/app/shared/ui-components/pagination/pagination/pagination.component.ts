import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPagination } from '../../../../core/models/pagination-model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public pagination: IPagination;
  @Output() public changeCurrentPage: EventEmitter<number> = new EventEmitter<number>();
  // tslint:disable-next-line
  public _page = 1;
  constructor() { }
  public get page(): number {
    return this._page;
  }
  public set page(page: number) {
    this._page = page;
    this.changePage(page);
  }

  public changePage(currentPage: any): void {
    this.changeCurrentPage.emit(currentPage - 1);
  }

}
