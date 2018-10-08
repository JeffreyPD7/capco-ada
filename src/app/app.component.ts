
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, ActivationStart, Router} from '@angular/router';

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

    constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.setCurrentRoute(event.url);
        }
      }
    );

    // Populate filterRow array
    // for (let i = 1; i <= 5; i++) {
    //   this.filterRow.push(
    //     {id: i, value: 5 * i}
    //     );
    // }
  }

  public setCurrentRoute(url): void {
    if (url === '/home') {
      this.showHome = true;
    } else if (url === '/sample-data') {
      this.showSampleData = true;
    } else if (url === '/extra-credit') {
      this.showExtraCredit = true;
    }
  }

  public setClasses(): string {
    if (this.showSampleData) {
      return 'sample-data';
    } else if (this.showExtraCredit) {
      return 'extra-credit';
    }
  }


}
