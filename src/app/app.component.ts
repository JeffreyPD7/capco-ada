
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'capco-ada';

  public showHome = false;
  public showSampleData = false;
  public showExtraCredit = false;

  constructor() {}

  ngOnInit() {}

  public onShowRouteEvent(e) {
    this.showHome = e[0];
    this.showSampleData = e[1];
    this.showExtraCredit = e[2];
  }

  public setClasses(): string {
    if (this.showSampleData) {
      return 'sample-data';
    } else if (this.showExtraCredit) {
      return 'extra-credit';
    }
  }
}
