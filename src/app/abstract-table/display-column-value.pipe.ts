import { Pipe, PipeTransform } from '@angular/core';
import { ColumnConfig } from './ColumnConfig';

@Pipe({
  name: 'displayColumnValue'
})
export class DisplayColumnValuePipe implements PipeTransform {

  transform(value: any, column: ColumnConfig): string {
    console.log({column, value});

    return column.displayFunction ? column.displayFunction(value) : value;
  }

}
