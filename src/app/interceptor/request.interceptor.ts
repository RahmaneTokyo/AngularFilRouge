import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // On récupère le token stocké dans le localstorage
    const local = localStorage.getItem('userToken');
    if (local) {
      // On clône la requête en y insérant le token
      request = request.clone( {
        headers: request.headers.set('Authorization', 'Bearer ' + local)
      });
    }
    // On retourne la requête clônée
    return next.handle(request);
  }

}
