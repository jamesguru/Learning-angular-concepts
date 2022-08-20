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

  

  ngOnInit(): void {


    this.route.params.subscribe((value:Params) => {

      this.id = value['index'];

      this.book =this.bookService.getBook(this.id)


      console.log(this.book)
    })
  }


}
