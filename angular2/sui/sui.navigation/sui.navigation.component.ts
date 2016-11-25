import { Component, Input, OnInit } from '@angular/core';
import { NavigationModel } from './sui.navigation.model';

@Component({
  selector: 'sui-nav',
  templateUrl: './sui.navigation.component.html'
})
export class NavigationComponent  implements OnInit {
  showSmallMenu: boolean = false;
  showSideMenu: boolean = false;
  
  @Input() nav: NavigationModel;
  @Input() showSideNav: boolean;
  @Input() rightAllginMobileMenuBars: boolean=true;
  @Input() rightSideNav:boolean =true;
  
  ngOnInit():void {
    if(this.rightSideNav)
        this.nav.sideNavStyle=  {'width':'200px', 'right':'0'}
  }
  onBarsClicked() {
    this.showSmallMenu = !this.showSmallMenu;
  }
  onSideMenuClick() {
    this.showSideMenu = !this.showSideMenu;
  }
}
