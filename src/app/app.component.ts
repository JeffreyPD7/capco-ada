
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

  // public selectedFilter: number = 5;

  // public filterRow: any[] = [
  //   {id: 1, value: 5},
  //   {id: 2, value: 10},
  //   {id: 3, value: 15},
  //   {id: 4, value: 20},
  //   {id: 5, value: 25}
  // ];

  // public filterRow: any[] = []

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
