import { Component, Input } from '@angular/core';

@Component({
    selector: 'sui-slider-content',
    templateUrl: './sui.slider.content.component.html',

})
export class SliderContentComponent {
    @Input() cssClass: string = '';
    @Input() style: Object = {};
}
