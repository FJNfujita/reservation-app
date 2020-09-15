import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
    { 
        path: 'products', component: ProductComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: ':productId', component: ProductDetailComponent }
        ]
    }
  ];

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class productModule { }
