
import { PipeTransform, Pipe } from '@angular/core';
import { FilterModel } from './sui.util.filter.model';
import { contains } from './sui.util.contains';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: FilterModel): any {
        if (filter && filter.keyValues && filter.keyValues.length) {
            if (!filter.orCondition) {
                for (let ft of filter.keyValues) {
                    items = items.filter(item => {
                        let key = '';
                        if (!filter.isStringArray) {
                            key = item[ft.key];
                        } else {
                            key = item;
                        }
                        let response = false;
                        ft.value.forEach(y => {
                            let con = contains(key, y);
                            if (con) {
                                response = true;
                            }
                        })
                        return response;
                    });
                }
            } else {
                let res: any[] = [];
                for (let item of items) {
                    for (let ft of filter.keyValues) {
                        let key = '';
                        if (!filter.isStringArray) {
                            key = item[ft.key];
                        } else {
                            key = item;
                        }
                        if (contains(key, ft.value[0]))
                            res.push(item);
                    }
                }
                return res;
            }
        }
        return items;
    }
}


