import { LoaderHandlingService } from './../services/loader-handling.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, delay, finalize, tap } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private SharedService: SharedService,
    private LoaderHandlingService: LoaderHandlingService
  ) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.LoaderHandlingService.showLading();

    return next.handle(request).pipe(
      finalize(() => this.LoaderHandlingService.hideLading()),
    );
  }
}
