import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractTableComponent } from './abstract-table/abstract-table.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AbstractTableComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule,
  ],
  exports: [
    AbstractTableComponent,
  ]
})
export class AbstractTableModule { }
