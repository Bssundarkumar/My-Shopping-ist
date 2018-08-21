import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shopping.model';
import { ShoppingService } from '../shopping.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-shoppping-list-details',
  templateUrl: './shoppping-list-details.component.html',
  styleUrls: ['./shoppping-list-details.component.css']
})
export class ShopppingListDetailsComponent implements OnInit {
  shoppingList: ShoppingList;
  shoppingLists: ShoppingList[];
  id: number;
  constructor(private shoppingService: ShoppingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((parms: Params) => {
      this.id = +parms['id'];
      this.shoppingList = this.shoppingService.getShoppingList(this.id);
    });
  }

  onEditItem(id: number) {
       this.shoppingService.startedEditing.next(id);
  }

}
