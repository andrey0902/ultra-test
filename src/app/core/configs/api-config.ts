import { environment } from '../../../environments/environment';

export class ApiConfig {
  public static baseUrl = environment.baseUrl;

  public static getSearchImages = `${ApiConfig.baseUrl}gifs/search`;
}
