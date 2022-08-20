import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Book from 'src/app/interface/Book';
import { BookService } from '../products/books/book.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  constructor(private route:ActivatedRoute, private bookService:BookService) { }


  id!:number;
  book!:Book;

  title!:string;
  price!:number;
  img!:string;

  

  

  ngOnInit(): void {


    this.route.params.subscribe((value:Params) => {

      this.id = value['id'];

      this.book =this.bookService.getBook(this.id);

      this.title=this.book.title;
      this.img=this.book.img;
      this.price=this.book.price;
      

  
    })
  }


}
