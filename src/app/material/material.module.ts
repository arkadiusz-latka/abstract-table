import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';



const modules = [
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatSortModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
