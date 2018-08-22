import { ShoppingList } from './shopping.model';
import { ItemModel } from './item.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingService {
  shopListChanged = new Subject<ShoppingList[]>();
  startedEditing = new Subject<number>();
  itemsChanged = new Subject<ItemModel[]>();
  private totalItem: ItemModel[] = [];
  nullItem: ItemModel[];
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
    let newItems = [];
    if (oldItems === undefined) {
      newItems = [itemNew];
    } else {
      newItems = [...oldItems, itemNew];
    }
    const lstName = this.shoppingList[id].listName;
    const shoppingnew = new ShoppingList(lstName, newItems);
    this.shoppingList[id] = shoppingnew;
    this.getAllItems();
    this.shopListChanged.next(this.shoppingList.slice());
  }
  getIngredient(lId: number, iId: number) {
    // tslint:disable-next-line:no-unused-expression
    return this.shoppingList[lId].items[iId];
  }
  deleteItem(lId: number, iId: number) {
    this.getAllItems();
    return this.shoppingList[lId].items.splice(iId, 1);
  }
  addNewListName(name: string) {
    const shoppingnew = new ShoppingList(name, this.nullItem);
    this.shoppingList.push(shoppingnew);
    this.shopListChanged.next(this.shoppingList.slice());
    this.getAllItems();
    return this.shoppingList;
  }
  getAllItems() {
    // tslint:disable-next-line:prefer-const
    let newItems = [];
    // tslint:disable-next-line:prefer-const
    for (let shop of this.shoppingList) {
      // tslint:disable-next-line:prefer-const
      for (let item of shop.items) {
        newItems.push(item);
      }
    }
    this.totalItem = newItems;
    return this.totalItem;
  }
  updateItem(id: number, index: number, item: ItemModel) {
    this.getAllItems();
    this.shoppingList[id].items[index] = item;
  }
}
