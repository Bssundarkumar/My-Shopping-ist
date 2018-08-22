import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shopping.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shoppping-list',
  templateUrl: './shoppping-list.component.html',
  styleUrls: ['./shoppping-list.component.css']
})
export class ShopppingListComponent implements OnInit {
  listEditMode = false;
  shoppingLists: ShoppingList[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingLists = this.shoppingService.getShoppingLists();
    console.log(this.shoppingLists);

  }
  onAddListName(form: NgForm) {
      const value = form.value;
      this.listEditMode = false;
      this.shoppingService.addNewListName(value.lstName);
  }
  editMode() {
    return this.listEditMode = true;
  }

}
