import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';
import { WholesalerModule } from './wholesaler/wholesaler.module';
import { WholesalerComponent } from './wholesaler/wholesaler/wholesaler.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        // loadChildren: () => ProductModule,
        component: ProductComponent,
      },
      {
        path: 'wholesaler',
        // loadChildren: () => WholesalerModule,
        component: WholesalerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
