import { IImages } from '../models/images-model';
import { IDataImageApi } from '../models/data-image-api-model';

export class ImagesHttpAdapter {
  public static getImage(data: IDataImageApi): IImages {
    return {
      type: data.type,
      id: data.id,
      title: data.title,
      imgUrl: data.images.preview_gif.url,
      height: data.images.preview_gif.height,
      width: data.images.preview_gif.width,
      size: data.images.preview_gif.size,
    };
  }
}
