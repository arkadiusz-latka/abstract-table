import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { WholesalerComponent } from './wholesaler/wholesaler.component';
import { AbstractTableModule } from '../abstract-table/abstract-table.module';



@NgModule({
  declarations: [
    WholesalerComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    AbstractTableModule,
  ]
})
export class WholesalerModule { }
