import { Component, OnInit, Input } from '@angular/core';


import { SampleDataService } from '../../services/sample-data.service';
import { ISampleData } from '../../interfaces/sample-data.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.scss']
})
export class SampleDataComponent implements OnInit {

  // @Output() currentUrl = new EventEmitter<string>();
  @Input() filter;

  public dataList: ISampleData[] = [];
  public errorMsg: string;

  public selectedFilter: number = 25;
  public filterRow: any[] = [];

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

    // Populate filterRow array
    for (let i = 1; i <= 8; i++) {
      this.filterRow.push(
        {id: i, value: 25 * i}
      );
    }
  }

}
