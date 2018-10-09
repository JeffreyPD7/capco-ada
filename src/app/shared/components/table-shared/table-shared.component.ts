import {Component, Input, OnInit} from '@angular/core';

import {SampleDataService} from '../../services/sample-data.service';
import {ISampleData} from '../../interfaces/sample-data.interface';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {throwError} from 'rxjs';
import {IDataPost} from '../../interfaces/data-post';

@Component({
  selector: 'app-table-shared',
  templateUrl: './table-shared.component.html',
  styleUrls: ['./table-shared.component.scss']
})
export class TableSharedComponent implements OnInit {

  @Input() sliceStart;
  @Input() sliceEnd;

  public dataList: ISampleData[] = [];
  public errorMsg: string;

  constructor(
    private _sampleData: SampleDataService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this._sampleData.getData()
      .subscribe(
        data => this.dataList = data,
        error => this.errorMsg = <any>error
      );
  }

  public saveInfo(rowId: number, rowStatus: string): void {
    this.httpClient.post<IDataPost>('http://localhost:3000/submitInfo',
      {
        'id': rowId,
        'status': rowStatus
      })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );

    alert(`Row of ID ${rowId} and Status of ${rowStatus} has been submitted to api/submit`);
  }

  // private handleError(errorResponse: HttpErrorResponse) {
  //   if (errorResponse.error instanceof ErrorEvent) {
  //     console.error('Client Side Error :', errorResponse.error.message);
  //   } else {
  //     console.error('Server Side Error :', errorResponse);
  //   }
  //
  //   return throwError('There is a problem with the service.We are notified & working on it. Please try again later.');
  // }
}
