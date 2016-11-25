import { PipeTransform, Pipe } from '@angular/core';
import { ColumnModel } from '../sui.table/sui.table.model';

@Pipe({
    name: 'visible'
})
export class VisiblePipe implements PipeTransform {
    transform(items: ColumnModel[], hiddenFields: string[]): any {
        debugger;
        return items.filter(item => {
            return this.isVisible(item, hiddenFields);
        });
    }

    isVisible(column: ColumnModel, hiddenFields: string[]): boolean {
        let exist = hiddenFields.find(y => y === column.fieldName);
        if (exist === undefined)
            return true;
    }
}
