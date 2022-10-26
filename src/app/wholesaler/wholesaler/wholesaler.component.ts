import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { WholesalerModel } from 'src/app/types/Wholesaler.model';

@Component({
  selector: 'app-wholesaler',
  templateUrl: './wholesaler.component.html',
  styleUrls: ['./wholesaler.component.scss']
})
export class WholesalerComponent implements OnInit {
  wholesalers: WholesalerModel[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWholesalers().pipe().subscribe((data) => this.wholesalers = data);
  }

}
