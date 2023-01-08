import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quantium-assignment';
  showSidebar = false;
  faBars = faBars;
  
  activeRoute = '';
  constructor(
    private _router: Router,
  )
  {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.activeRoute = val.url.split('/')[1]

        if (this.activeRoute == 'fund' || this.activeRoute == 'login' || this.activeRoute == '') {
          this.showSidebar = false
        }
        else {
          this.showSidebar = true
        }
      } 
  });
  }
}
