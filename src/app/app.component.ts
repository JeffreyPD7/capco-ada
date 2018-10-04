import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showHome: boolean = true;
  public showSampleData: boolean = false;
  public showExtraCredit: boolean = false;


  title = 'capco-ada';

  public setClasses(): string {
    if (this.showSampleData) {
      return 'sample-data';
    } else if (this.showExtraCredit) {
      return 'extra-credit';
    }
  }
}
