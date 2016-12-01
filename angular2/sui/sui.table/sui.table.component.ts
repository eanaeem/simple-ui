import {
    Component,
    Input,
    Output,
    OnInit,
    EventEmitter
} from '@angular/core';

import {
    FilterModel,
    FilterKeyValue
} from '../sui.util/sui.util.filter.model';

import {
    TableMenuFilterModel
} from '../sui.util/sui.util.table.menu.filter.pipe';

import {
    TableModel,
    ColumnModel,
    EnumFieldType,
    EnumEditType
} from './sui.table.model';

import { SuiHttpService } from '../sui.util/sui.util.httpService';
import {
    FormBase,
    DropdownField,
    TextboxField
} from '../sui.util/sui.util.formBase';
import { AlertType } from '../sui.alert/sui.alert.component';

@Component({
    selector: 'sui-table',
    templateUrl: './sui.table.component.html',
    providers: [SuiHttpService]
})
export class TableComponent implements OnInit {
    @Input() tableModel: TableModel;

    @Output() updateRecord: EventEmitter<any> = new EventEmitter<any>();
    @Output() addRecord: EventEmitter<any> = new EventEmitter<any>();
    @Output() deleteRecord: EventEmitter<any> = new EventEmitter<any>();
    @Output() actionButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() bindUnboudData: EventEmitter<any> = new EventEmitter<any>();
    @Output() bindCustomFilterData: EventEmitter<any> = new EventEmitter<any>();

    filters: FilterModel = new FilterModel();
    filterMenuSearchFilters: FilterModel = new FilterModel();
    tableMenuFilterModel: TableMenuFilterModel[] = [];
    hiddenFields: string[] = [];
    sortKey: string;
    descOrder: boolean;
    sortedIcon: string = '';
    currentPage: number;
    pageSize: number;
    totalPageCount: number;
    filterOrCondition: boolean;
    showDialog: boolean = false;
    fields: FormBase[] = [];
    deleteConfirmMessage: string = 'Are you Sure, You want to delete record?';
    confirmDelete: boolean = false;
    showForm: boolean = false;
    showTable: boolean = true;
    deleteRow?: any;
    isEditRow: boolean = false;
    isAddRow: boolean = false;
    showLoader: boolean = false;
    showColumnsToChoose: boolean = false;

    errorMessage: string = '';
    modalHeaderText: string = '';
    deleteIndex?: number;
    tableData: any[];
    rowToAdd: any;
    alertType: AlertType = AlertType.error;
    columns: ColumnModel[] = [];
    hasUnboundColumn: boolean = false;
    filterPanelField: string = '';
    constructor(private suiHttpService: SuiHttpService) { }
    ngOnInit(): void {
        this.getColumns().forEach(y => {
            if (y.hidden)
                this.onColumnChooserClick(y);
        });
        this.currentPage = this.tableModel.pagination.currentPage;
        this.pageSize = this.tableModel.pagination.pageSize;
        let data = this.getData();
        if (data) {
            let noOfPages = data.length / this.pageSize;
            this.totalPageCount = noOfPages;
        }
    }

    getType(field: EnumFieldType): string {
        return EnumFieldType[field];
    }


    getData(force: boolean = false) {
        if (!force && this.tableData && this.tableData.length)
            return this.tableData;

        if (this.tableModel.data && this.tableModel.data.length) {
            this.tableData = this.tableModel.data;
        } else if (this.tableModel.getUrl) {
            this.showLoader = true;
            this.suiHttpService.get(this.tableModel.getUrl, false).subscribe(data => {
                if (this.hasUnboundColumn) {
                    this.bindUnboudData.emit(data);
                }
                this.showLoader = false;
                this.tableData = data;
            }, error => {
                this.showLoader = false;
                if (typeof error === 'string') {
                    this.errorMessage = <any>error;
                } else if (error.message) {
                    this.errorMessage = <any>error.message;
                } else {
                    this.errorMessage = error.toString();
                }
            });
        }
        return this.tableData;
    }

    onpageSizeChange(event: number) {
        this.pageSize = event;
    }

    onRefresh() {
        this.getData(true);
    }

    onEditRow(row: any) {
        this.setFormFields(row);
        if (row) {
            this.isEditRow = true;
            this.modalHeaderText = this.tableModel.editRecordHeader;
        } else {
            this.isAddRow = true;
            this.modalHeaderText = this.tableModel.addRecordHeader;
        }
        if (this.tableModel.editType === 2) {
            this.showDialog = !this.showDialog;
        } else if (this.tableModel.editType === 3) {
            this.showTable = false;
            this.showForm = true;
        }
    }

    onDeleteRow(row: any) {
        this.deleteRow = row;
        this.confirmDelete = !this.confirmDelete;

    }

    deleteRowFromTable(row: any) {
        let id = this.getIdentityValue(row);
        let identityField = this.getIdentityField();
        this.deleteIndex = this.tableData.findIndex(y => {
            return y[identityField.fieldName] === id;
        });
    }

    updateTableRow(row: any) {
        let id = this.getIdentityValue(row);
        let identityField = this.getIdentityField();
        if (id) {
            let rowToUpdate = this.tableData.find(y => {
                return y[identityField.fieldName] === id;
            });
            if (rowToUpdate) {
                this.tableModel.columns.forEach(col => {
                    rowToUpdate[col.fieldName] = row[col.fieldName];
                });
            }
        }
    }

    saveForm(object: any) {
        let val = JSON.stringify(object);
        this.showTable = true;
        this.showForm = false;
        this.showDialog = false;
        if (typeof object === 'boolean' && !object) {
        } else {
            if (this.isEditRow) {
                if (!this.tableModel.updateUrl) {
                    this.updateTableRow(object);
                    this.updateRecord.emit(object);
                } else {
                    let url = this.tableModel.updateUrl;
                    this.suiHttpService.update(object, url).subscribe(res => {
                        this.updateTableRow(res);
                    }, error => this.errorMessage = <any>error);
                }

            } else if (this.isAddRow) {
                if (!this.tableModel.addUrl) {
                    this.rowToAdd = object;
                    this.addRecord.emit(object);
                } else {
                    this.suiHttpService.add(object, this.tableModel.addUrl)
                        .subscribe(obj => this.tableData.push(obj),
                        error => this.errorMessage = <any>error);
                }

            }
        }
    }

    deleteResponse(response: boolean) {
        this.confirmDelete = !this.confirmDelete;
        if (response) {
            let id = this.getIdentityValue(this.deleteRow);

            if (this.tableModel.deleteUrl) {
                this.suiHttpService.delete(id).subscribe(res => {
                    this.deleteRowFromTable(this.deleteRow);
                }, error => this.errorMessage = <any>error);
            } else {
                this.deleteRecord.emit(this.deleteRow);
                this.deleteRowFromTable(this.deleteRow);
            }
        }
    }

    onPageClick(item: number) {
        this.currentPage = item;
    }

    getDisplayRecordsTex(): string {
        if (this.tableData && this.tableData.length) {
            let startRecord = (this.currentPage - 1) * this.pageSize + 1;
            let rec = this.currentPage * this.pageSize;
            let endRecord = rec > this.tableData.length ? this.tableData.length : rec;
            return startRecord + ' - ' + endRecord + ' of ' + this.tableData.length;
        }
        return '';
    }

    onFilterChange(event: any, key: any) {
        debugger;

        let value = event.target.value;
        if (key === 'search') {
            let filterModel = new FilterModel();
            let keyValues: FilterKeyValue[] = [];
            this.getColumns().forEach(y => {
                if (y.canFilter) {
                    let filter = new FilterKeyValue();
                    filter.key = y.fieldName;
                    filter.value = [value];
                    keyValues.push(filter);
                }
            });
            filterModel.keyValues = keyValues;
            filterModel.orCondition = true;
            this.filters = filterModel;
        } else {
            let filterModel = new FilterModel();
            if (key.customFilter) {
                this.bindCustomFilterData.emit({ column: key, value: value });
            } else {
                let prop = this.filters.keyValues.find(y => y.key === key.fieldName);
                if (prop) {
                    prop.value = [value];
                } else {
                    prop = new FilterKeyValue();
                    prop.key = key;
                    prop.value = [value];
                    this.filters.keyValues.push(prop);
                }
                filterModel.keyValues = this.filters.keyValues;
                filterModel.orCondition = false;
                this.filters = filterModel;
            }
        }
    }

    bindFilterToField(key: string, value: any, isRemove: boolean = false) {
        let filterModel = new FilterModel();
        if (!isRemove) {
            let prop = new FilterKeyValue();
            let exist = this.filters.keyValues.find(y => y.key == key);
            debugger;
            if (exist) {
                exist.value.push(value)
                prop.key = key;
                prop.value = exist.value;
            } else {
                prop.key = key;
                prop.value = [value];
            }
            this.filters.keyValues.push(prop);
        } else {
            let index = this.filters.keyValues.findIndex(y => y.key == key && y.value == value);
            this.filters.keyValues.splice(index, 1);
        }
        filterModel.keyValues = this.filters.keyValues;
        filterModel.orCondition = false;
        this.filters = filterModel;

    }

    onFilterMenuClick(column: ColumnModel): void {
        if (column.fieldName === this.filterPanelField) {
            this.filterPanelField = '';
        } else {
            this.filterPanelField = column.fieldName;
        }

    }

    onFilterMenuCheckClick(event: any, field: string, item: any) {
        debugger;
        if (event) {
            this.bindFilterToField(field, item.value);
        } else {
            this.bindFilterToField(field, item.value, true);
        }
    }

    onFilterMenuSearchChange(event: any, column: ColumnModel) {
        let val = event.target.value;
        let exist = this.tableMenuFilterModel.find(y => y.fieldName === column.fieldName);
        if (exist) {
            let index = this.tableMenuFilterModel.findIndex(y => y.fieldName === column.fieldName);
            this.tableMenuFilterModel.splice(index, 1);
        }
        if (val) {
            let tm = new TableMenuFilterModel();
            tm.fieldName = column.fieldName;
            tm.search = val;
            this.tableMenuFilterModel.push(tm);
        }
    }
    getSelectList(column: ColumnModel, includeEmptyValue: boolean = true) {
        if (column.selectList && column.selectList.length < 1 && column.autoCreateSelectListFromData) {
            if (includeEmptyValue) {
                column.selectList.push({ key: '', value: '', field: column.fieldName, isSelected: false });
            }
            if (this.tableData) {
                if (column.autoCreateSelectListFromData) {
                    for (let item of this.tableData) {
                        let value = item[column.fieldName];
                        let exist = column.selectList.find(y => y.value === value);
                        if (exist === undefined) {
                            column.selectList.push({ key: value, value: value, field: column.fieldName, isSelected: false });
                        }
                    }
                }
            }
        }
        let data: { key: string, value: string, field: string, isSelected: boolean }[] = [];
        column.selectList.forEach(y => {
            data.push(y);
        });
        return data;
    }

    onColumnChooserClick(column: ColumnModel) {
        let notHidden = this.showColumnIcon(column);
        if (notHidden) {
            this.hiddenFields.push(column.fieldName);
        } else {
            let index = this.hiddenFields.findIndex(y => y === column.fieldName);
            this.hiddenFields.splice(index, 1);
        }
        let f: string[] = [];
        this.hiddenFields.forEach(y => {
            f.push(y);
        })
        this.hiddenFields = f;
    }

    showColumnIcon(column: ColumnModel) {
        let exist = this.hiddenFields.find(y => y === column.fieldName);
        if (exist === undefined)
            return true;
    }



    onActionButtonClick(id: string, row: any) {
        this.actionButtonClicked.emit({ id, row });
    }
    onSortClick(column: ColumnModel) {
        if (column.canSort) {
            this.sortKey = column.fieldName;
            this.descOrder = !this.descOrder;
            if (this.descOrder) {
                this.sortedIcon = this.tableModel.sortDescIcon;
            } else {
                this.sortedIcon = this.tableModel.sortAscIcon;
            }
        }
    }

    getTableStyles() {
        return this.tableModel.style;
    }

    getTableClasses() {
        return this.tableModel.cssClass;
    }

    getColumns() {
        if (this.columns && !this.columns.length) {
            this.tableModel.columns.forEach(col => {
                if (!col.showOnlyInEditForm)
                    this.columns.push(col);
                if (col.isUnBoundColumn) {
                    this.hasUnboundColumn = true;
                }
            })
        }
        return this.columns;
    }

    trackByIndex(index: number, item: any) {
        return index;
    }

    getIdentityField() {
        let columns = this.getColumns();
        let res = columns.filter(y => y.identityField);
        if (res && res.length) {
            return res[0];
        }
        return null;
    }


    getIdentityValue(row: any) {
        let ideityField = this.getIdentityField();
        if (ideityField) {
            return row[ideityField.fieldName];
        }
        return null;
    }

    setFormFields(row: any) {
        let order = 1;
        this.fields = [];
        this.tableModel.columns.forEach(y => {
            if (!y.isUnBoundColumn || (y.isUnBoundColumn && y.canEditUnBoundColum)) {
                let val = row ? row[y.fieldName] : '';
                let fieldType = this.getType(y.fieldType);
                if (fieldType === 'select') {
                    let selectList = this.getSelectList(y);
                    let options: any[] = [];
                    selectList.forEach(z => {
                        options.push({ key: z.key, value: z.value });
                    });
                    this.fields.push(new DropdownField({
                        key: y.fieldName,
                        label: y.displayName,
                        options: options,
                        value: val,
                        disabled: y.fieldName === '_id' || !y.canEdit || y.identityField,
                        readonly: y.fieldName === '_id' || !y.canEdit || y.identityField,
                        order: order
                    }));
                } else {
                    this.fields.push(
                        new TextboxField({
                            key: y.fieldName,
                            label: y.displayName,
                            type: fieldType,
                            required: y.required,
                            value: val,
                            disabled: y.fieldName === '_id' || !y.canEdit || y.identityField,
                            readonly: y.fieldName === '_id' || !y.canEdit || y.identityField,
                            placeholder: y.displayName,
                            order: order
                        }),
                    );
                    order = order + 1;
                }
            }
        });
    }
}
