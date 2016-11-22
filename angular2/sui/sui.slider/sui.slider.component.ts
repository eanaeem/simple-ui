import { SliderContentComponent } from './sui.slider.content.component';
import {
    ContentChildren,
    Component,
    QueryList,
    Input,
    forwardRef,
    AfterContentInit
} from '@angular/core';

@Component({
    selector: 'sui-slider',
    templateUrl: './sui.slider.component.html',

})
export class Slideromponent implements AfterContentInit {
    @Input() cssClass: string = '';
    @Input() style: Object = {};
    @Input() indicatorCssClass: string = '';
    @Input() indicatorStyle: Object = {};
    @Input() showIndicators: boolean = true;

    @ContentChildren(forwardRef(() => SliderContentComponent))

    contents: QueryList<SliderContentComponent>;
    currentSlide: number = 0;
    ngAfterContentInit() {
        this.contents.toArray()[this.currentSlide].isVisible = true;
    }
    onPreviousClick() {
        this.currentSlide = this.currentSlide - 1;
        if (this.currentSlide < 0) {
            this.currentSlide = 0;
        }
        this.closeAll();
        this.contents.toArray()[this.currentSlide].isVisible = true;
    }
    onNextClick() {
        this.currentSlide = this.currentSlide + 1;
        let array = this.contents.toArray();
        if (this.currentSlide > array.length - 1) {
            this.currentSlide = array.length - 1;
        }
        this.closeAll();
        array[this.currentSlide].isVisible = true;
    }

    closeAll() {
        this.contents.toArray().forEach(slide => {
            slide.isVisible = false;
        });
    }
}
