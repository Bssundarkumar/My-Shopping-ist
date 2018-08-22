import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingList } from '../shopping.model';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemListComponent } from '../item-list/item-list.component';
import { Subscription } from 'rxjs';
import { ItemModel } from '../item.model';

@Component({
  selector: 'app-shoppping-list-details',
  templateUrl: './shoppping-list-details.component.html',
  styleUrls: ['./shoppping-list-details.component.css']
})
export class ShopppingListDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('f')
  slForm: NgForm;
  editMode = false;
  updateMode = false;
  shoppingList: ShoppingList;
  shoppingLists: ShoppingList[];
  itemComp: ItemListComponent;
  id: number;
  editedIndexNumber: number;
  subscription: Subscription;
  editedItem: ItemModel;
  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parms: Params) => {
      this.id = +parms['id'];
      this.shoppingList = this.shoppingService.getShoppingList(this.id);
    });

    this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editedIndexNumber = index;
      this.updateMode = true;
      this.editedItem = this.shoppingService.getIngredient(this.id, index);
      console.log(this.editedItem);
      this.slForm.setValue({
        itemName: this.editedItem.name,
        itemAmount: this.editedItem.amount
      });
    });
  }

  onaddNewItem(form: NgForm) {
    this.editMode = false;
    const value = form.value;
    const newItem = new ItemModel(value.itemName, value.itemAmount);
    if (this.updateMode) {
      this.updateMode = false;
      this.shoppingService.updateItem(this.id, this.editedIndexNumber, newItem);
      this.ngOnInit();
    } else {
      this.shoppingService.addItem(this.id, value.itemName, value.itemAmount);
      this.ngOnInit();
    }
  }

  enableEdit() {
    this.editMode = true;
  }

  onEditItem(id: number) {
    this.editMode = true;
    this.shoppingService.startedEditing.next(id);
  }

  onDeleteItem(i: number) {
    this.shoppingService.deleteItem(this.id, i);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
