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
      catchError(this.errorHandler)
    );
  }

  private errorHandler(err: HttpErrorResponse) {
    let errorMsg = '';

    if (err.error instanceof ErrorEvent) {
      errorMsg = `Error ${err.error.message}`;
    } else {
      errorMsg = `Server Error ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMsg);
    return throwError(errorMsg);
  }
}
