export class NavigationModel {
    public brandLogoPath?: string;
    public cssClass?: string;
    public style: Object={};
    public sideNavStyle:Object={};
    public links: RouteLinkModel[];
    public showBothBrandAndLogo: boolean = false;
    public brandCssClass: string = ' sui-brand ';
    public brandStyle: Object = {};
    public brandLogoClass: string = ' ';
    public brandLogoStyle: Object = {};
    constructor(public brand: string) {
        this.links = [];
    }
}

export class RouteLinkModel {
    public dropdownLinks?: RouteLinkModel[] =[]
    public showBothIconText: boolean = false;
    public requireLogin: boolean = false;
    public style?: Object={};
    public cssClass?: string;
    public icon?: string;
    constructor(public routerLink: string, public displayName: string) {
    }
}