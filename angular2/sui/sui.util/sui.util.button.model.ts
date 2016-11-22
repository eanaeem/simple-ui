export class ButtonModel {
    displayText: string = '';
    icon?: string;
    showBothIconAndText: boolean = false;
    cssClass: string = 'sui-btn';
    style: Object = {};
    constructor(public id: string) { }
}