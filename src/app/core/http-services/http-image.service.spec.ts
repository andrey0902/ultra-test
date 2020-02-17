import { TestBed } from '@angular/core/testing';
import { HttpImageService } from './http-image.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IImageApi } from '../models/image-api-model';
import { ApiConfig } from '../configs/api-config';
import { HttpParams } from '@angular/common/http';

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

const testURL = ApiConfig.getSearchImages;

describe('HttpImageService', () => {
  let service: HttpImageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpImageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return the same data what mock before`, () => {

    service.getImages(({} as HttpParams)).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(testURL);

    expect(req.request.method).toBe('GET');

    req.flush(mockData);
  });
});
