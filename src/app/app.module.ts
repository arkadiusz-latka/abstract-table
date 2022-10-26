import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { AbstractTableModule } from './abstract-table/abstract-table.module';
// import { ProductModule } from './product/product.module';
// import { WholesalerModule } from './wholesaler/wholesaler.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ProductModule,
    // WholesalerModule,
    SharedModule,
    MaterialModule,
    AbstractTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
