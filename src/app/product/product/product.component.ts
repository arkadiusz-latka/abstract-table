import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, tap } from 'rxjs';
import { ColumnConfig } from 'src/app/abstract-table/ColumnConfig';
import { DataService } from 'src/app/data.service';
import { ProductModel } from 'src/app/types/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  productsDataSoruce: MatTableDataSource<ProductModel> = new MatTableDataSource();
  columnConfigs: ColumnConfig[] = [
    {
      alias: 'nazwa',
      name: 'name',
      isSortable: true,
    },
    {
      alias: 'Opis',
      name: 'description',
      isSortable: false,
    },
    {
      alias: 'Data Modyfikacji',
      name: 'modificationDate',
      isSortable: true,
      displayFunction(item) {
        return new Date(item).toLocaleDateString('pl-PL');
      },
    },
    {
      alias: 'Dostępny',
      name: 'isAvailable',
      isSortable: false,
    },
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().pipe(tap(console.log)).subscribe((data) => this.productsDataSoruce.data = data);
  }

  changeAvability(element: ProductModel) {
    element.isAvailable = !element.isAvailable;
    console.log(element);
  }

  ngOnDestroy() {
    // this.productsDataSoruce.destory();
  }
}
