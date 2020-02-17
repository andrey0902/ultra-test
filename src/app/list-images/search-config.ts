import { environment } from '../../environments/environment';
import { IConfigSearch } from '../core/models/config-search-model';

export const searchConfig: IConfigSearch = {
  q: '',
  api_key: environment.api_key,
  limit: 9,
  offset: 0,
  rating: 'G',
  lang: 'en'
};
