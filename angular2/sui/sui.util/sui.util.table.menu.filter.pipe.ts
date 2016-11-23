
import { PipeTransform, Pipe } from '@angular/core';
import { contains } from './sui.util.contains';

@Pipe({
    name: 'tableMenuFilter'
})
export class TableMenuFilterPipe implements PipeTransform {
    transform(items: any[], tableMenuFilterModels: TableMenuFilterModel[]): any {
        if (items && items.length && tableMenuFilterModels && tableMenuFilterModels.length) {
            let field = items[0].field;
            let res: any[] = [];
            tableMenuFilterModels.forEach(tableMenuFilterModel => {
                if (tableMenuFilterModel.fieldName && tableMenuFilterModel.search) {
                    items.forEach(y => {
                        if (field === tableMenuFilterModel.fieldName) {
                            if (contains(y.value, tableMenuFilterModel.search)) {
                                res.push(y);
                            }
                        } else {
                            res.push(y);
                        }
                    })
                }
            });
            return res;
        }
        return items;
    }
}

export class TableMenuFilterModel {
    public fieldName: string;
    public search: Object;
}