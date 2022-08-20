import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { setupTestingRouterInternal } from '@angular/router/testing';

import Book from '../../interface/Book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(


    private router:Router
  ) { }


  @Input() book!:Book;
  @Input() index!:number;

  @Output() addToCart = new EventEmitter<Book>();

  

  ngOnInit(): void {
  }

disabled = false;

goToProduct(index:number){

this.router.navigate(['book',index]);

}

  addCart(){


    this.addToCart.emit(this.book)

    this.disabled=true;

    


  }

}
