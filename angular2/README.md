# angular2-simple-ui

Material Design with Simple 30KB CSS File for fast rendering

## Setting Up / Installation ## 

npm install --save angular2-simple-ui
Include Sui-Module in your  app.module.ts

  import { SuiModule } from './sui/sui.module'; 

 If you don't have any changes simply  import  style.less into your app.component.ts
 
 import './sui/public/css/style.less';

If you want CSS file 

 import './sui/public/css/style.css';


Thats all you are up and running

## Change Themes ##
 
 import variable.less and change Values as per your theme 

 import variable.less into your style.less and include what ever styles you require for

 
@import 'base.less'; // base normalized less file
@import 'font.less'; // ROBO Font file , need to change fonts just import font.less and update it
@import 'core.less'; //cor style sheets
@import 'grid.less'; // if you want to use Simple UI Grid styles import this
@import 'typography.less'; // Simple UI Material Design typography
@import 'nav.less'; // Navigation Style sheets
@import 'button.less'; // Button Style Sheets
@import 'modal.less'; // Modal / Dialog Style Sheets
@import 'form.less'; // Input Form Components Style Sheets
@import 'table.less'; // Table Style Sheets
@import 'accordion.less'; // Accordion Style Sheet
@import 'card.less'; // Card Style Sheet
@import 'animate.less'; // Simple Animation library
@import 'util.less'; // Most Helpful Utils
@import 'colors.less'; // Material Colors

