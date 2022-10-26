import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { ColumnConfig } from 'src/app/abstract-table/ColumnConfig';
import { DataService } from 'src/app/data.service';
import { WholesalerModel } from 'src/app/types/Wholesaler.model';

@Component({
  selector: 'app-wholesaler',
  templateUrl: './wholesaler.component.html',
  styleUrls: ['./wholesaler.component.scss']
})
export class WholesalerComponent implements OnInit {
  productsDataSoruce: MatTableDataSource<WholesalerModel> = new MatTableDataSource();
  wholesalers: WholesalerModel[] = [];
  columnConfigs: ColumnConfig[] = [
    {
      alias: 'nazwa',
      name: 'name',
      isSortable: true,
    },
    {
      alias: 'Wynik',
      name: 'score',
      isSortable: true,
    },
    {
      alias: 'Phone number',
      name: 'phone',
      isSortable: true,
    }
  ];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getWholesalers();
  }

  getWholesalers() {
    this.dataService.getWholesalers().pipe(tap(console.log)).subscribe((data) => this.productsDataSoruce.data = data);
  }

  copyData(wholesaler: WholesalerModel) {
    console.log(wholesaler);
  }

  displayData(wholesaler: WholesalerModel) {
    console.log(wholesaler);
  }
}
