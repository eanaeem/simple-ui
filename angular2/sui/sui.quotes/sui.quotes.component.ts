import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-quotes',
    templateUrl: './sui.quotes.component.html',

})
export class QuotesComponent  {
    @Input() quotesClass: string;
    @Input() quotesStyle: Object = {};

}
