
import { ButtonModel } from '../sui.util/sui.util.button.model';
import { PaginationModel } from '../sui.util/sui.util.pagination.model';


export enum EnumFieldType {
    text = 0,
    number = 1,
    date = 2,
    datetime = 3,
    checkbox = 4,
    select = 5,
    password = 6,
    image = 7,
    email = 8,
    tel = 9,
    radio = 10,
    range = 11,
    time = 12,
    url = 13,
    file = 14,
    hidden = 15,
    week = 16,
    month = 17,
    color = 18
}
export enum EnumEditType {
    RowEdit = 0,
    CellEdit = 1,
    DialogEdit = 2,
    FormEdit = 3,
    None = 4
}

export enum Position {
    TopRight,
    TopLeft,
    BottomRight,
    BottomLeft
}

export class TableModel {
    public enableQuickFilterBy: boolean = true;
    public enablePaging: boolean = true;
    public enableSorting: boolean = true;
    public enableFiltering: boolean = true;
    public enableExport: boolean = true;
    public enableServerSideFiltering: boolean = false;
    public enableServerSideSorting: boolean = false;
    public enableServerSideQuickFilterBy: boolean = false;
    public enableServerSidePaging: boolean = false;
    public enableServerSideExport: boolean = false;
    public cssClass: Object = 'sui-table-all';
    public style: Object = {};
    public cssHeaderClass: string = '';
    public cssRowCssClass: string = 'sui-padding ';
    public styleRow: Object = {};
    public styleHeader: Object = {};
    public editType: EnumEditType = EnumEditType.FormEdit;

    public cssSortIcon: string = 'sui-margin-right';
    public styleSortIcon: Object = {};
    public cssHeaderText: string = 'sui-margin-right';
    public styleHeaderText: Object = {};
    public sortIcon: string = '';
    public sortDescIcon: string = 'fa fa-long-arrow-down';
    public sortAscIcon: string = 'fa fa-long-arrow-up';
    public showMenuFilterIcon: string = 'fa fa-sort-desc';
    public cssSearchInputClass: string = ' sui-border ';
    public searchInputPlaceholderText: string = 'Search ...';
    public paginingControlPosition: Position = Position.TopRight;
    public pagination: PaginationModel = new PaginationModel();
    public cssTableContainerClass:string='';
    public tableContainerstyle:Object={};
    
    public tableHeader: string = '';
    public cssTableHeader: string = '';
    public styleTableHeader: Object = {};
    public canEdit: boolean = true;
    public canAdd: boolean = true;
    public canDelete: boolean = true;
    public canColumnChoose: boolean = true;
    
    public editRecordHeader: string = 'Edit record';
    public addRecordHeader: string = 'Add new record';
    public showColumnFilterMenu: boolean = true;
    public showFilterRow: boolean = false;
    public rowActionButtons: ButtonModel[] = [];
    public tableCustomActionButtons: ButtonModel[] = [];
    
    public getUrl?: string;
    public addUrl?: string;
    public updateUrl?: string;
    public deleteUrl?: string;

    public columChooserBtn: ButtonModel = new ButtonModel('columnChooser');
    public editBtn: ButtonModel = new ButtonModel('edit');
    public addBtn: ButtonModel = new ButtonModel('add');
    public deleteBtn: ButtonModel = new ButtonModel('delete');
    public refreshBtn:ButtonModel  = new ButtonModel('refresh');
    public canRefresh: boolean = true;

    constructor(public columns: ColumnModel[] = [], public data: any[] = []) {
        this.editBtn.displayText = 'Edit';
        this.editBtn.icon = 'fa fa-edit';
        this.editBtn.cssClass = 'sui-btn-info sui-small';

        this.deleteBtn.displayText = 'Delete';
        this.deleteBtn.icon = 'fa fa-times';
        this.deleteBtn.cssClass = 'sui-btn-danger sui-small';

        this.addBtn.displayText = 'Add new';
        this.addBtn.icon = 'fa fa-plus-circle';
        this.addBtn.cssClass = 'sui-btn';
        this.addBtn.displayText = 'Add new record';

        this.refreshBtn.icon='fa fa-repeat';
        this.refreshBtn.cssClass='sui-btn sui-light-grey ';
        this.refreshBtn.displayText = 'Reload Data';

        this.columChooserBtn.icon='fa fa-bars';
        this.columChooserBtn.cssClass='sui-btn sui-light-grey ';
        this.columChooserBtn.displayText = ' Choose Columns';
    }
}

export class ColumnModel {
    public hidden: boolean = false;
    public canFilter: boolean = true;
    public canSort: boolean = true;
    public canExport: boolean = true;
    public canEdit: boolean = true;
    public identityField: boolean = false;
    public selectList: { key: string, value: string, field: string, isSelected: boolean  }[] = [];
    public cssfilterRow: string = 'sui-input ';
    public styleFilterRow: Object = {};
    public autoCreateSelectListFromData: boolean = true;
    public required: boolean = false;
    public showInQuickFilter: boolean = false;
    public showOnlyInEditForm: boolean = false;
    public isUnBoundColumn: boolean = false;
    public canEditUnBoundColum: boolean = false;
    public filtedMenuValue: string = '';
    public customFilter:boolean=false;

    constructor(public fieldName: string,
        public displayName: string,
        public fieldType: EnumFieldType = EnumFieldType.text) { }
}
