import {
  NavigationModel,
  RouteLinkModel
} from '../../sui/sui.navigation/sui.navigation.model';
import { Component } from '@angular/core';
import '../../public/css/style.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public nav: NavigationModel;
  constructor() {
    this.nav = new NavigationModel('Simple UI');
    let links = [new RouteLinkModel('welcome', 'Welcome'),
    ];
    this.nav.links = links;
  }
}
