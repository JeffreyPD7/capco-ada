import { Component, OnInit } from '@angular/core';

import { SampleDataService } from '../../services/sample-data.service';
import { ISampleData } from '../../interfaces/sample-data.interface';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.scss']
})
export class SampleDataComponent implements OnInit {

  public dataList: ISampleData[] = [];
  public errorMsg: string;

  JSON: JSON;

  constructor(private _sampleData: SampleDataService) { }

  ngOnInit() {
    this._sampleData.getData()
      .subscribe(
        data => this.dataList = data,
        error => this.errorMsg = <any>error
      );

    // alert(JSON.stringify(this.dataList));
  }

}
