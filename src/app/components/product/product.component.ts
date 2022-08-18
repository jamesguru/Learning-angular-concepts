import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Book from '../../interface/Book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }


  @Input() book!:Book;
  @Output() addToCart = new EventEmitter<Book>();

  

  ngOnInit(): void {
  }

  addCart(){


    this.addToCart.emit(this.book)

    


  }

}
