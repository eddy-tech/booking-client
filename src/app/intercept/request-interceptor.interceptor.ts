import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_KEY } from '../enums/flight';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private url: string = environment.apiUrl

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiRequest1 = request.url.startsWith(this.url);
    const isApiRequest2 = request.url.startsWith(this.url + '/bookings/')
    if(isApiRequest1 || isApiRequest2) {
      request = request.clone({
        setHeaders: {
          'K4-API-KEY': API_KEY
        }
      })
    }
    return next.handle(request);
  }
}
