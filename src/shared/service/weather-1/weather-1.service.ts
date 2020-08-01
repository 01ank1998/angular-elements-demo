import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Weather1Service {
  private API_URL =
    'https://api.openweathermap.org/data/2.5/find?q=mumbai&appid=0157170848082c20ae5f9ec87c93184e&units=metric';

  constructor(private _http: HttpClient) {}

  getWeather(city, unit): Observable<any> {
    return this._http
      .get<any>(`${this.API_URL}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error): Observable<any> {
    return throwError(error.error.message);
  }
}
