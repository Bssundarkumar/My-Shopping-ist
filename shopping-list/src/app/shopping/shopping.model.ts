import { ItemModel } from './item.model';

export class ShoppingList {
    public listName:  string;
    public items: ItemModel[];

    constructor(listName: string, items: ItemModel[]) {
        this.listName = listName;
        this.items = items;
    }
}
