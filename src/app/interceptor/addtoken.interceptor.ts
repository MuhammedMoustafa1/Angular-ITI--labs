import { HttpInterceptorFn } from '@angular/common/http';

export const addtokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token == null) {
    return next(req);
  }
  req = req.clone({
    setHeaders: { 'Authorization': `Bearer ${token}` },
  });
  return next(req);

};
