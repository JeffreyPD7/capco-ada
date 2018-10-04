
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, ActivationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'capco-ada';

  public showHome: boolean = false;
  public showSampleData: boolean = false;
  public showExtraCredit: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.setCurrentRoute(event.url);
        }
      }
    );
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
