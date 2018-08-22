import { ShoppingList } from './shopping.model';
import { ItemModel } from './item.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingService {
  shopListChanged = new Subject<ShoppingList[]>();
  startedEditing = new Subject<number>();
  addNewItem = new Subject<number>();
  itemsChanged = new Subject<ItemModel[]>();
  private totalItem: ItemModel[] = [];
  nullItem: ItemModel[];
  itemList1: ItemModel[] = [
    new ItemModel('IceCream', 1),
    new ItemModel('Chocolates', 50),
    new ItemModel('cake', 1)
  ];
  itemLis21: ItemModel[] = [
    new ItemModel('Phone', 1),
    new ItemModel('Tab', 2),
    new ItemModel('Mac', 1),
    new ItemModel('Camera', 1)
  ];
  private shoppingList: ShoppingList[] = [
    new ShoppingList('Wallmart', this.itemList1),
    new ShoppingList('BestBuy', this.itemLis21)
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
    let index = 0;
    if (oldItems === undefined) {
      newItems = [itemNew];
      index = -1;
    }  else {
      newItems = [...oldItems, itemNew];
      index = this.shoppingList[id].items.findIndex(itm => itm.name === name);
    }
    const lstName = this.shoppingList[id].listName;
    const shoppingnew = new ShoppingList(lstName, newItems);
    if (index === -1) {
      this.shoppingList[id] = shoppingnew;
    } else {
      this.shoppingList[id].items[index].amount += amount;
    }
    this.getAllItems();
  }
  getIngredient(lId: number, iId: number) {
    // tslint:disable-next-line:no-unused-expression
    return this.shoppingList[lId].items[iId];
  }
  deleteItem(lId: number, iId: number) {
   
     return this.shoppingList[lId].items.splice(iId, 1);
  }
  addNewListName(name: string) {
    const shoppingnew = new ShoppingList(name, this.nullItem);
    this.shoppingList.push(shoppingnew);
    this.shopListChanged.next(this.shoppingList.slice());
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
    newItems = newItems.filter((items, index, self) =>
    index === self.findIndex( (item) => item.name === items.name));
    this.totalItem = newItems;
    return this.totalItem;
  }
  addItemByIndex(id: number, index: number) {
    const newItem = this.totalItem[index];
    const name = newItem.name;
    const amount = 0;
    const Item = new ItemModel(name, amount);
    const oldItems = this.shoppingList[id].items;
    let indexId = 0;
    let newItems = [];
    if (oldItems === undefined) {
      newItems = [Item];
      indexId = -1;
    } else {
      newItems = [...oldItems, Item];
      indexId = this.shoppingList[id].items.findIndex(itm => itm.name === name);
    }
    const lstName = this.shoppingList[id].listName;
    const shoppingnew = new ShoppingList(lstName, newItems);
    if (indexId === -1) {
      this.shoppingList[id].items = newItems;
    } else {
      this.shoppingList[id].items[indexId].amount += amount;
    }
  }

  updateItem(id: number, index: number, item: ItemModel) {
    return this.shoppingList[id].items[index] = item;
  }
}
