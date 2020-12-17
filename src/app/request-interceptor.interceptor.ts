import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const local = localStorage.getItem('userToken');
    if (local) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + local)
      });
    }
    return next.handle(request);
  }
}
