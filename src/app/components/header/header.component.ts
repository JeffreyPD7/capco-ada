
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  showRouteEvent: EventEmitter<Array<boolean>> = new EventEmitter<Array<boolean>>();

  public showHome = false;
  public showSampleData = false;
  public showExtraCredit = false;

  constructor(private router: Router) { }

  ngOnInit() {

    // Get current page url on refresh/reload
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.setCurrentRoute(event.url);
        }
      }
    );

  }


  /**
   * Emits output values on change of routes
   *
   * @method
   * @public
   */
  public onShowRouteEventChange(): void {
    const eventsArray: boolean[] = [
      this.showHome,
      this.showSampleData,
      this.showExtraCredit
    ];

    this.showRouteEvent.emit(eventsArray);
  }


  /**
   * Set route values to the pertaining url
   *
   * @method
   * @public
   * @param {string} url - holds the current page url on refresh
   */
  public setCurrentRoute(url: string): void {
    if (url === '/home') {
      this.showHome = true;
    } else if (url === '/sample-data') {
      this.showSampleData = true;
    } else if (url === '/extra-credit') {
      this.showExtraCredit = true;
    }

    this.onShowRouteEventChange();
  }
}
