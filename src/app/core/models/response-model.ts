import { IImages } from './images-model';
import { IPagination } from './pagination-model';

export interface IResponse {
  data: IImages[];
  pagination: IPagination;
}
