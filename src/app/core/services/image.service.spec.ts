import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpImageService } from '../http-services/http-image.service';
import { Observable, of } from 'rxjs';
import { IImageApi } from '../models/image-api-model';
import { searchConfig } from '../../list-images/search-config';

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

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpImageService, useValue: imageService}
      ]
    });
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return value image', () => {
    service.getImages(searchConfig)
      .subscribe((res) => {
        expect(res.pagination.count).toBe(9);
      });
  });
});
