import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from '../../components/product/product-list/product-list.component';
import {ProductCreateComponent} from '../../components/product/product-create/product-create.component';
import {ProductUpdateComponent} from '../../components/product/product-update/product-update.component';


@NgModule({
  declarations: [ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}
