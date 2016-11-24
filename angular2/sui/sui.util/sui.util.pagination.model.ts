export class PaginationModel {
    public pageSizeArray: number[] = [5, 10, 25, 50, 100, 500, 1000];
    public showPaging: boolean = true;
    public showPageSizeSelection: boolean = true;
    public pageSize: number = 10;
    public quickAccessMaxPages: number = 5;
    public showGoToEndArrow: boolean = false;
    public showGoToStartArrow: boolean = false;
    public showGoToNextArrow: boolean = true;
    public showGoToPreviousArrow: boolean = true;
    public showPageNumbers: boolean = true;
    public showRecordNumbers: boolean = true;
    public currentPage: number = 1;
    public activePageCssClass: string = 'sui-theme';
    public clsGoToNextPageIcon: string = 'fa fa-angle-right';
    public clsGoToPreviousPageIcon: string = 'fa fa-angle-left';
    public clsGoToStartIcon: string = 'fa fa-angle-double-left';
    public clsGoToEndIcon: string = 'fa fa-angle-double-right';
    public toolTipGoToNext = 'Go to next page';
    public toolTipGoToPrevious = 'Go to next page';
    public toolTipGoToStart = 'Go to first page';
    public toolTipGoToEnd = 'Go to last page';
    public txtPageSelection = ' Rows per page  ';
    public cssPagination = 'sui-pagination sui-margin-0';
    public stylePagination = {};
    public cssSelectPageSize = 'sui-select sui-padding-0  sui-border-0';
    public styleSelectPageSize = {};
}
