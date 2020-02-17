import { IPagination } from './pagination-model';
import { IDataImageApi } from './data-image-api-model';

export interface IImageApi {
  data: IDataImageApi[];
  pagination: IPagination;
}
