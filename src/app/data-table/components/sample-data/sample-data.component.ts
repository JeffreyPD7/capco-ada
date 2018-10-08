import {Component, OnInit} from '@angular/core';

import {SampleDataService} from '../../../shared/services/sample-data.service';
import {ISampleData} from '../../../shared/interfaces/sample-data.interface';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.scss']
})
export class SampleDataComponent implements OnInit {

  public dataList: ISampleData[] = [];
  public errorMsg: string;
  public dataListLength: number;

  public selectedFilter = 25;
  public filterRow: any[] = [];

  JSON: JSON;


  public currentPage = 1;
  public sliceStart = 0;
  public sliceEnd = 25;
  public numOfPages = 5;

  constructor(private _sampleData: SampleDataService) {
  }

  ngOnInit() {
    this._sampleData.getData()
      .subscribe(
        data => this.dataList = data,
        error => this.errorMsg = <any>error,
        () => {
          this.dataListLength = this.dataList.length;
          this.populateArray(this.dataList);
        }
      );
  }

  public populateArray(dataList: ISampleData[]): void {
    this.dataListLength = dataList.length;

    let list = Math.floor(this.dataListLength / this.selectedFilter);

    if ((this.dataListLength % this.selectedFilter) !== 0) {
      list++;
    }


    for (let i = 1; i <= list; i++) {
      this.filterRow.push(
        {id: i, value: 25 * i}
      );
    }

    this.numOfPages = list;
  }

  public nextPage(): void {
    this.sliceStart = this.sliceEnd;
    this.sliceEnd = this.sliceEnd + this.selectedFilter;
    this.currentPage++;
  }

  public previousPage(): void {
    this.sliceEnd = this.sliceStart;
    this.sliceStart = this.sliceStart - this.selectedFilter;
    this.currentPage--;
  }

  public firstPage(): void {
    this.sliceStart = 0;
    this.sliceEnd = this.selectedFilter;
    this.currentPage = 1;
  }

  public lastPage(): void {
    this.sliceEnd = this.dataListLength;
    this.sliceStart = this.dataListLength - this.selectedFilter;
    this.currentPage = this.numOfPages;
  }

  public filterChange(event): void {
    this.sliceStart = 0;
    this.sliceEnd = event;
    this.currentPage = 1;
    this.numOfPages = Math.floor(this.dataListLength / this.selectedFilter);

    if ((this.dataListLength % this.selectedFilter) !== 0) {
      this.numOfPages++;
    }
  }


}
