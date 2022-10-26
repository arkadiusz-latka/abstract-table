import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AbstractTableModule } from '../abstract-table/abstract-table.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AbstractTableModule,
  ]
})
export class ProductModule { }
