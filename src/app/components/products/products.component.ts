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


   showProduct:boolean = false;


   name:string = '';
   img:string = '';
   price!:number;


   cart:Book[] = this.cartService.getCartBooks();


   addCart(event:Book){


    this.showProduct = true;

    this.name = event.title;
    this.img = event.img;

    this.price = event.price;

    this.cartService.addTocart(event)
    
  
  }

  Close(){


    this.showProduct=false;
  }



  ngOnInit(): void {
  }

}
