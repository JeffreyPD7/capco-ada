import {Component, Input, OnInit} from '@angular/core';

import {SampleDataService} from '../../services/sample-data.service';
import {ISampleData} from '../../interfaces/sample-data.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

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
    const infoObject: object = {
      id: rowId,
      status: rowStatus
    };

    this.httpClient.post<any>('http://localhost:3000/sample_submit',
      infoObject, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });

    alert(`POST Object ${JSON.stringify(infoObject)}`);
    // alert(`This is the rowID ${rowId} and rowStatus ${rowStatus}`);
  }
}
