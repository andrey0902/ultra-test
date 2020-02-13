import { IImages } from './images-model';
import { IPagination } from './pagination-model';

export interface IImageApi {
  data: IImages[];
  pagination: IPagination;
}
