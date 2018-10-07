import {Component, OnInit, Input} from '@angular/core';


import {SampleDataService} from '../../services/sample-data.service';
import {ISampleData} from '../../interfaces/sample-data.interface';
import {NgForm} from '@angular/forms';

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


  // Pagination Section ---------------------------------------
  // public numOne: number;
  // public numTwo: number;
  public currentPage: number = 1;
  // public numFour: number;
  // public numFive: number;
  public newDataList: ISampleData[] = [];

  public sliceStart: number = 0;
  public sliceEnd: number = 25;
  public numOfPages: number = 8;



  // end of pagination ----------------------------------------


  constructor(private _sampleData: SampleDataService) {
  }

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

    // alert(this.dataList[].length);
    // alert(Object.keys(this.dataList).length);
  }

  // Pagination Section ---------------------------------------
  public nextPage(): void {
    this.sliceStart = this.sliceEnd;
    this.sliceEnd = this.sliceStart + this.selectedFilter;
    this.currentPage++;
  }

  public previousPage(): void {
    this.sliceEnd = this.sliceStart;
    this.sliceStart = this.sliceStart - this.selectedFilter;
    this.currentPage--;
  }


  public filterChange(event): void {
    this.sliceStart = 0;
    this.sliceEnd = event;
    this.currentPage = 1;
    this.numOfPages = 200 / this.selectedFilter;
    // alert(`Value is ${event}`);
  }

  // end of pagination ----------------------------------------

}
