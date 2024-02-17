import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { Injectable } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method === 'POST' && request.url.includes('create-order')) {
      return next.handle(request);
    }
    if (request.url.includes('check-email-exist')) {
      return next.handle(request);

    }
    this.loaderService.load();

    return next.handle(request).pipe(
      delay(500),
      finalize(() => {
        this.loaderService.hidingloader();

      })
    );

  }
}
