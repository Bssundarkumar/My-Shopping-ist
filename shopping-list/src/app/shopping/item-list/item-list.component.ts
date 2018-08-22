import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ItemModel } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  itemsList: ItemModel[];
  subscription: Subscription;
  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.itemsList = this.shopService.getAllItems();
    this.subscription = this.shopService.itemsChanged.subscribe((changedItems: ItemModel[]) => {
      changedItems = changedItems.filter((items, index, self) =>
          index === self.findIndex( (item) => item.name === items.name));
      this.itemsList = changedItems;
       this.itemsList = Array.from(new Set(this.itemsList));
     });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
