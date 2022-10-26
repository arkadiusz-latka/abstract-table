import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { products } from './products-data';
import { ProductModel } from './types/product.model';
import { WholesalerModel } from './types/Wholesaler.model';
import wholesalers from './wholesaler-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    console.log('getProducts');

    return of(products).pipe();
  }

  getWholesalers(): Observable<WholesalerModel[]> {
    return of(wholesalers).pipe();
  }
}
