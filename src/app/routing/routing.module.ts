import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from '../details/details.component';
import { ProductListComponent } from '../product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details/:name', component: DetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponents = [ProductListComponent, DetailsComponent];
