import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from './item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  cart:Item[];
  
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.cartChanged.subscribe(
      (cart:Item[])=>{
        this.cart = cart;
      }
    )
  }

  onAdd(item:Item){ 
    this.cartService.updateItem(item);

  }

  onDelete(item:Item){
    this.cartService.deleteFromCart(item);
  }

}
