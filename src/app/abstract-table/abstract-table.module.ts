import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { DisplayColumnValuePipe } from './display-column-value.pipe';



@NgModule({
  declarations: [
    AbstractTableComponent,
    DisplayColumnValuePipe,
  ],
  imports: [
    MaterialModule,
    SharedModule,
  ],
  exports: [
    AbstractTableComponent,
    DisplayColumnValuePipe
  ]
})
export class AbstractTableModule { }
