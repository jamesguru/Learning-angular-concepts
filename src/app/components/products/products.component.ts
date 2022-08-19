import { Component, OnInit } from '@angular/core';
import  {BookService} from './books/book.service';
import Book from '../../interface/Book';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {


  books:Book[] =[]

  constructor( bookservice:BookService, private cartService:CartService) {


    this.books = bookservice.getBooks() 



    
   }


   cart:Book[] = this.cartService.getCartBooks();


   addCart(event:Book){

    this.cartService.addTocart(event)
    
  
  }



 

  

  ngOnInit(): void {
  }

}
