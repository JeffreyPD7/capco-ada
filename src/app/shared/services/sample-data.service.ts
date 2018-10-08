import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {ISampleData} from '../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  private url = 'assets/data/sample_data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<ISampleData[]> {
    return this.http.get<ISampleData[]>(this.url).pipe(
      tap(data => console.log('Data import successful')),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('client side error: ', err.error.message);
    } else {
      console.error('server side error: ', err);
    }

    console.error(err);
    return throwError(err);
  }
}
