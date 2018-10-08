import {Component, Input, OnInit} from '@angular/core';

import {SampleDataService} from '../../services/sample-data.service';
import {ISampleData} from '../../interfaces/sample-data.interface';

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

  constructor(private _sampleData: SampleDataService) { }

  ngOnInit() {
    this._sampleData.getData()
      .subscribe(
        data => this.dataList = data,
        error => this.errorMsg = <any>error
      );
  }
}
