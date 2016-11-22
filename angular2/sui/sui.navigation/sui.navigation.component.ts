import { Component, Input } from '@angular/core';
import { NavigationModel } from './sui.navigation.model';

@Component({
  selector: 'sui-nav',
  templateUrl: './sui.navigation.component.html'
})
export class NavigationComponent {
  showSmallMenu: boolean = false;
  @Input() nav: NavigationModel;
  @Input() showSideNav: boolean;
  showSide: boolean = false;
  onBarsClicked() {
    this.showSmallMenu = !this.showSmallMenu;
  }
  sui_close() {
    this.showSide = true;
  }
  sui_open() {
    this.showSide = false;
  }
}
