
import { PipeTransform, Pipe } from '@angular/core';
import { FilterModel } from './sui.util.filter.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: FilterModel): any {
        if (filter && filter.keyValues && filter.keyValues.length) {
            if (!filter.orCondition) {
                for (let ft of filter.keyValues) {
                    items = items.filter(item => {
                        if (!filter.isStringArray)
                            return contains(item[ft.key], ft.value);
                        return contains(item, ft.value);
                    });
                }
            } else {
                let res: any[] = [];
                for (let item of items) {
                    for (let ft of filter.keyValues) {
                        if (!filter.isStringArray) {
                            if (contains(item[ft.key], ft.value))
                                res.push(item);
                        } else {
                            if (contains(item, ft.value))
                                res.push(item);
                        }
                    }
                }
                return res;
            }
        }
        return items;
    }
}

export function contains(val: Object, search: Object) {
    if (!search)
        return true;
    if (typeof val === 'string') {
        if (val.toLowerCase().includes(search.toString().toLowerCase())) {
            return true;
        }
    } else if (typeof val === 'number') {
        return Number(val) === Number(search);
    } else if (typeof val === 'boolean') {
        return val.toString() === search.toString();
    }
}

