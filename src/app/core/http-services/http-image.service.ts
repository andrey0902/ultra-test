import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from '../configs/api-config';

@Injectable({
  providedIn: 'root'
})
export class HttpImageService {

  constructor(private http: HttpClient) { }

  public getImages(httpParams: HttpParams): Observable<any> {
    return this.http.get<any>(ApiConfig.getSearchImages, { params: httpParams });
  }
}
