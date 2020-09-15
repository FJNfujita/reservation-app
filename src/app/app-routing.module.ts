import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productModule } from './product/produvt.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    productModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }