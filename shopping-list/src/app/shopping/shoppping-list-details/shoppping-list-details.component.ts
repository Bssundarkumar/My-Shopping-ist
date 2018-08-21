import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shopping.model';
import { ShoppingService } from '../shopping.service';
import {ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shoppping-list-details',
  templateUrl: './shoppping-list-details.component.html',
  styleUrls: ['./shoppping-list-details.component.css']
})
export class ShopppingListDetailsComponent implements OnInit {
  editMode = false;
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

  onaddNewItem(form: NgForm) {
    const value = form.value;
    console.log(value.itemAmount);
    console.log(value.itemName);
    this.shoppingService.addItem(this.id, value.itemName, value.itemAmount);
  }

  enableEdit() {
    this.editMode = true;
  }

  onEditItem(id: number) {
       this.shoppingService.startedEditing.next(id);
  }

  onDeleteItem(i: number) {
      this.shoppingService.deleteItem(this.id, i);
  }



}
