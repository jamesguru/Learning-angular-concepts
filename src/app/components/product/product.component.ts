import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Book from '../../interface/Book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }


  @Input() books!:Book[];
  @Output() addToCart = new EventEmitter<Book>();

  title!: string;
  img!:string;
  price!:number;


  ngOnInit(): void {
  }

  addCart(){


    this.addToCart.emit({

      title:"",
      img:"",
      price:0
    })

    


  }

}
