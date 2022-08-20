import { Component, OnInit } from '@angular/core';
import Book from '../../interface/Book'
import { BookService } from '../products/books/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookService:BookService) { }


  title!:string;

  price!:number;

  image!:string;


  book!:Book;

  

  ngOnInit(): void {
  }


  addBook(){

    this.book={

      "title":this.title,

      "img": this.image,

      "price":this.price
    }

    this.bookService.addBook(this.book);


    this.title='';
    this.price=0;
    this.image='';
  }
}
