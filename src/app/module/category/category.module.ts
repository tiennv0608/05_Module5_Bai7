import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryListComponent} from '../../components/category/category-list/category-list.component';
import {CategoryCreateComponent} from '../../components/category/category-create/category-create.component';
import {CategoryEditComponent} from '../../components/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from '../../components/category/category-delete/category-delete.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
