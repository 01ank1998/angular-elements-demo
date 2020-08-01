import { Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { finalize, catchError, mergeMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of, throwError, ObservableInput } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './service/login/login.service';
import { GS_AUTH_TOKEN } from 'src/app/consume-token/consume-token.component.data';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
    private spinner: NgxSpinnerService,
    private router: Router,
    private loginService: LoginService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.totalRequests++;
    this.spinner.show();
    request = request.clone({
      withCredentials: true,
    });
    return next.handle(request).pipe(
      catchError((x) => this.handleAuthError(x)),
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.spinner.hide();
        }
      }),
    );
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.localStorage.clear();
      return of(err.message);
    }
    return throwError(err);
  }
}
