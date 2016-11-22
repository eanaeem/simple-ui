import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PaginationModel } from '../sui.util/sui.util.pagination.model';

@Component({
    selector: 'sui-pagination',
    templateUrl: './sui.pagination.component.html'
})
export class PaginationComponent implements OnInit {
    showSmallMenu: boolean = false;
    @Input() paginationModel: PaginationModel;
    @Input() totalRecords: number;
    currentPage: number = 1;
    totalPageCount: number = 0;

    @Output() pageSizeChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() pageClick: EventEmitter<any> = new EventEmitter<any>();


    pageSize: number = 10;
    onpageSizeChange(event: any) {
        this.pageSize = event.target.value;
        this.pageSizeChange.emit(this.pageSize);
    }
    onPageClick(item: number) {
        this.currentPage = item;
        this.pageClick.emit(item);
    }
    ngOnInit(): void {
        
    }
    getPages() {
        let noOfPages = this.totalRecords / this.pageSize;
        this.totalPageCount = noOfPages;
        let pageNumbers: any = [];
        let i = 1;
        while (i <= noOfPages) {
            pageNumbers.push(i++);
        }
        return pageNumbers;
    }

    getDisplayRecordsTex(): string {

        let startRecord = ((this.currentPage - 1) * (this.pageSize)) + 1;
        let rec = this.currentPage * this.pageSize;
        let endRecord = rec > this.totalRecords ? this.totalRecords : rec;
        return startRecord + ' - ' + endRecord + ' of ' + this.totalRecords;
    }

}
