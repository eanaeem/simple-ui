import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'pagination'
})
export class PagingPipe implements PipeTransform {
    transform(items: any[], currentPage: number, pageSize: number): any {
        let from = (currentPage - 1) * pageSize;
        let to = pageSize * currentPage;
        if (to > items.length)
            to = items.length;
        return items.slice(from, to);
    }
}
