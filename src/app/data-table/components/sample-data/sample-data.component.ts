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

  constructor(private _sampleData: SampleDataService) {}

  ngOnInit() {

    // Getting data from local json file
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


  /**
   * Populates an array with data objects from json file
   *
   * @method
   * @public
   * @param {ISampleData[]} dataList - Raw data from json file
   */
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


  /**
   * Changes pipe and current page values to the next iteration
   *
   * @method
   * @public
   */
  public nextPage(): void {
    this.sliceStart = this.sliceEnd;
    this.sliceEnd = this.sliceEnd + this.selectedFilter;
    this.currentPage++;
  }


  /**
   * Changes pipe and current page values to the previous iteration
   *
   * @method
   * @public
   */
  public previousPage(): void {
    this.sliceEnd = this.sliceStart;
    this.sliceStart = this.sliceStart - this.selectedFilter;
    this.currentPage--;
  }


  /**
   * Changes pipe and current page values to the first page
   *
   * @method
   * @public
   */
  public firstPage(): void {
    this.sliceStart = 0;
    this.sliceEnd = this.selectedFilter;
    this.currentPage = 1;
  }


  /**
   * Changes pipe and current page values to the last page
   *
   * @method
   * @public
   */
  public lastPage(): void {
    this.sliceEnd = this.dataListLength;
    this.sliceStart = this.dataListLength - this.selectedFilter;
    this.currentPage = this.numOfPages;
  }


  /**
   * Resets pipe values after every filter change
   *
   * @method
   * @public
   * @param event
   */
  public filterChange(event: number): void {
    this.sliceStart = 0;
    this.sliceEnd = event;
    this.currentPage = 1;
    this.numOfPages = Math.floor(this.dataListLength / this.selectedFilter);

    if ((this.dataListLength % this.selectedFilter) !== 0) {
      this.numOfPages++;
    }
  }
}
