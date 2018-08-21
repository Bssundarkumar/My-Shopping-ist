import { ShoppingList } from './shopping.model';
import { ItemModel } from './item.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingService {
  startedEditing = new Subject();

  itemList1: ItemModel[] = [
    new ItemModel('pen', 1),
    new ItemModel('pichi', 2),
    new ItemModel('ear', 41)
  ];
  itemLis21: ItemModel[] = [
    new ItemModel('x', 1),
    new ItemModel('y', 2),
    new ItemModel('z', 41)
  ];
  private shoppingList: ShoppingList[] = [
    new ShoppingList('Wallmart', this.itemList1),
    new ShoppingList('Wallgreans', this.itemLis21)
  ];

  getShoppingLists() {
    return this.shoppingList;
  }
  getShoppingList(id: number) {
    return this.shoppingList[id];
  }

  addItem(id: number, name: string, amount: number) {
    const itemNew = new ItemModel(name, amount);
    const oldItems = this.shoppingList[id].items;
    const newItems = [...oldItems, itemNew];
    const shoppingnew = new ShoppingList(
      this.shoppingList[id].listName,
      newItems
    );

    return this.shoppingList;
  }
  getIngredient(lId: number, iId: number) {
    return this.shoppingList[lId].items[iId];
  }
  deleteItem(lId: number, iId: number) {
    return this.shoppingList[lId].items.splice(iId, 1);
  }
  addNewListName(name: string) {
    const shoppingnew = new ShoppingList(name, null);
    this.shoppingList.push(shoppingnew);
    console.log(this.shoppingList);
    return this.shoppingList;
  }
}
