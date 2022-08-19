import { Injectable } from '@angular/core';
import Book from './interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  products:Book[] = [];


  addTocart(book:Book){

    
    this.products.push(book);

    

  }

  getCartBooksnumber(){


    return this.products.length;
  }
  

  getCartBooks(){


    return this.products;
  }
  





}
