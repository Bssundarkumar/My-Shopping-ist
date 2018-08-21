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

    addItem(id: number, item: ItemModel) {
          this.shoppingList[id].items.push(item);
         return this.shoppingList;
    }
    getIngredient(lId: number, iId: number) {
        return this.shoppingList[lId].items[iId];
    }
}
