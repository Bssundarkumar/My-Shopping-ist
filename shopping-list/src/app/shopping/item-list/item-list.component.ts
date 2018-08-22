import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ItemModel } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemsList: ItemModel[];

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.itemsList = this.shopService.getAllItems();
  }
  onUpdateItems() {
    this.ngOnInit();
  }

}
