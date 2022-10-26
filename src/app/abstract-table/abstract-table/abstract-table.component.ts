import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { ColumnConfig } from '../ColumnConfig';

@Component({
  selector: 'app-abstract-table',
  templateUrl: './abstract-table.component.html',
  styleUrls: ['./abstract-table.component.scss']
})
export class AbstractTableComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() columnConfigs!: ColumnConfig[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sortRef = new MatSort();
  displayedColumns: string[] = [];


  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ContentChildren(MatColumnDef) columnsInjected!: QueryList<MatColumnDef>;
  // @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.displayedColumns = this.columnConfigs.map(config => config.name);
    this.displayedColumns.unshift('actions');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.empTbSort.disableClear = true;
    // this.dataSource.sort = this.empTbSort;
    this.dataSource.sort = this.sortRef;
  }

  ngAfterContentInit() {
    this.columnsInjected.forEach(columnDef => {
      this.table.addColumnDef(columnDef);
      this.displayedColumns.unshift(columnDef.name);
      console.log(columnDef.name);
    });
    this.cd.detectChanges();
  }
}
