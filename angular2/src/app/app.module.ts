import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule , JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SuiModule } from '../../sui/sui.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    JsonpModule ,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    SuiModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
