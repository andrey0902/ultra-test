import { Injectable } from '@angular/core';
import { HttpImageService } from '../http-services/http-image.service';
import { Observable } from 'rxjs';
import { CHttpParams } from '../../shared/http-params';
import { HttpParams } from '@angular/common/http';
import { ImagesHttpAdapter } from '../http-adapters/images-http-adapter';
import { map } from 'rxjs/operators';
import { IImageApi } from '../models/image-api-model';
import { IDataImageApi } from '../models/data-image-api-model';
import { IResponse } from '../models/response-model';
import { IConfigSearch } from '../models/config-search-model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpImage: HttpImageService) { }

  public getImages(data: IConfigSearch): Observable<IResponse> {
    const sendData: HttpParams = CHttpParams.createHttpParams(data);
    return this.httpImage.getImages(sendData)
      .pipe(
        map((res: IImageApi) => {
          return {
            data: res.data.map(((img: IDataImageApi) => ImagesHttpAdapter.getImage(img))),
            pagination: res.pagination
          };
        })
      );
  }
}
