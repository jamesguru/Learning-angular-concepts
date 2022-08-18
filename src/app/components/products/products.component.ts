import { Component, OnInit } from '@angular/core';
import  {BookService} from '../../book.service';
import Book from '../../interface/Book';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {


  books:Book[] =[]

  constructor( bookservice:BookService) {


    this.books = bookservice.getBooks() 
   }



 

  addCart(event:Book){

    console.log(event)
  
  }

  ngOnInit(): void {
  }

}
