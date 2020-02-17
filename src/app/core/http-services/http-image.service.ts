import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from '../configs/api-config';
import { IImageApi } from '../models/image-api-model';

@Injectable({
  providedIn: 'root'
})
export class HttpImageService {

  constructor(private http: HttpClient) { }

  public getImages(httpParams: HttpParams): Observable<IImageApi> {
    return this.http.get<IImageApi>(ApiConfig.getSearchImages, { params: httpParams });
  }
}
