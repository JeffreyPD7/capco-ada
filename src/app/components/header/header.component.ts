
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.setCurrentRoute(event.url);
        }
      }
    );
  }

  public onShowRouteEventChange() {
    const eventsArray: boolean[] = [
      this.showHome,
      this.showSampleData,
      this.showExtraCredit
    ];

    this.showRouteEvent.emit(eventsArray);
  }

  public setCurrentRoute(url): void {
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
