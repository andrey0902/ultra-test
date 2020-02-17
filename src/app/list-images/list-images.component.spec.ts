import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImagesComponent } from './list-images.component';
import { IImageApi } from '../core/models/image-api-model';
import { Observable, of } from 'rxjs';
import { HttpImageService } from '../core/http-services/http-image.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockImage: any = {
  type: 'gif',
  id: 'WXB88TeARFVvi',
  title: 'dance party cat GIF',
  images: {
    preview_gif: {
      url: 'test',
      height: '10',
      width: '10',
      size: '10',
    }
  }
};
const mockData: IImageApi = {
  data: [mockImage],
  pagination: {
    total_count: 1,
    count: 9,
    offset: 0
  }
};

const imageService = {
  getImages(data: {[key: string]: string}): Observable<IImageApi> {
    return of(mockData);
  }
};

const pagination: any = {
  get changeCurrentPage(): Observable<any> {
    return of(1);
  }
};

describe('ListImagesComponent', () => {
  let component: ListImagesComponent;
  let fixture: ComponentFixture<ListImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImagesComponent ],
      providers: [
        { provide: HttpImageService, useValue: imageService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImagesComponent);
    component = fixture.componentInstance;
    component.paginationComponent = pagination;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
