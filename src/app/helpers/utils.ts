import _isEqual from 'lodash.isequal';
// tslint:disable

export default class Utils {
  static isEqual(value: any, other: any): boolean {
    return _isEqual(value, other);
  }
}
