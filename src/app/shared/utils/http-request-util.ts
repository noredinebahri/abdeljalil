import { HttpParams } from '@angular/common/http';
import { SORT_KEY } from 'src/app/shared/constants/shared.constant';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const buildHttpParamsFromRequest = (requestParams?: { [key: string]: any }): HttpParams => {
  let params: HttpParams = new HttpParams();

  if (requestParams) {
    Object.keys(requestParams)
      .filter(key => key !== SORT_KEY)
      .forEach(key => {
        params = params.set(key, requestParams[key]);
      });
    if (requestParams[SORT_KEY]) {
      requestParams[SORT_KEY].forEach((value: string) => {
        params = params.append(SORT_KEY, value);
      });
    }
  }

  return params;
};
