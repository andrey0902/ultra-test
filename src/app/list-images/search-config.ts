import { environment } from '../../environments/environment';

export const searchConfig = {
  q: '',
  api_key: environment.api_key,
  limit: 9,
  offset: 0,
  rating: 'G',
  lang: 'en'
};
