export class ButtonModel {
    displayText: string = '';
    icon?: string;
    showBothIconAndText: boolean = false;
    cssClass: string = '';
    style: Object = {};
    constructor(public id: string) { }
}