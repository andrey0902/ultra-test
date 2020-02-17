export interface IDataImageApi {
  title: string;
  type: string;
  id: string;
  images: {
    preview_gif: {
      url: string;
      height: string;
      width: string;
      size: string;
    }
  };
}
