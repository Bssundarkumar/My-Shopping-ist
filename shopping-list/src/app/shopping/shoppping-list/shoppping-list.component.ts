import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shopping.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shoppping-list',
  templateUrl: './shoppping-list.component.html',
  styleUrls: ['./shoppping-list.component.css']
})
export class ShopppingListComponent implements OnInit {
  shoppingLists: ShoppingList[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingLists = this.shoppingService.getShoppingLists();
  }

}
