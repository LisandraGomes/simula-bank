import { ResolveFn } from '@angular/router';

export const headerResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
