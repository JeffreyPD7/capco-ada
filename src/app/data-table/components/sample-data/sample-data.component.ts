import { Component, OnInit } from '@angular/core';

import { SampleDataService } from '../../services/sample-data.service';
import { ISampleData } from '../../interfaces/sample-data.interface';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.scss']
})
export class SampleDataComponent implements OnInit {

  // @Output() currentUrl = new EventEmitter<string>();

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

    // this.currentUrl.emit()
    // alert(JSON.stringify(this.dataList));
  }

}
