import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { ProductsComponent } from '../products.component';
import { ProductComponent } from '../../product/product.component';



@NgModule({
  declarations: [ProductsComponent,ProductComponent],
  
  imports: [
    CommonModule
  ],

  providers:[BookService],

  exports:[ProductsComponent]
})
export class BooksModule { }
