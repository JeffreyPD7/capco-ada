
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showHome = false;
  public showSampleData = false;
  public showExtraCredit = false;

  constructor() {}

  ngOnInit() {}


  /**
   * Receive emitted change of selected routes
   *
   * @method
   * @public
   * @param {Array<boolean>} e - EventEmitter array
   */
  public onShowRouteEvent(e: boolean[]): void {
    this.showHome = e[0];
    this.showSampleData = e[1];
    this.showExtraCredit = e[2];
  }

  /**
   *  Change classes pertaining to selected route
   *
   * @method
   * @public
   * @returns {string}
   */
  public setClasses(): string {
    if (this.showSampleData) {
      return 'sample-data';
    } else if (this.showExtraCredit) {
      return 'extra-credit';
    }
  }
}
