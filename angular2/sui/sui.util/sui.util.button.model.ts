export class ButtonModel {
    displayText: string = '';
    icon?: string;
    showBothIconAndText: boolean = true;
    cssClass: string = '';
    style: Object = {};
    constructor(public id: string) { }
}