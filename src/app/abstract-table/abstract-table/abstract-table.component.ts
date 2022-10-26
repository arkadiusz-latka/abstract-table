import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnConfig } from '../ColumnConfig';

@Component({
  selector: 'app-abstract-table',
  templateUrl: './abstract-table.component.html',
  styleUrls: ['./abstract-table.component.scss']
})
export class AbstractTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() columnConfigs!: ColumnConfig[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sortRef = new MatSort();
  displayedColumns: string[] = [];
  // @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor() { }

  ngOnInit(): void {
    console.log(this.columnConfigs);

    this.displayedColumns = this.columnConfigs.map(config => config.name);
    this.displayedColumns.unshift('actions');
    console.log('dupa', this.displayedColumns);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.empTbSort.disableClear = true;
    // this.dataSource.sort = this.empTbSort;
    this.dataSource.sort = this.sortRef;
  }
}
