import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../../item.model';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() itemsList: ItemModel;
  @Input() index = 0;
  constructor(private sservice: ShoppingService) { }

  ngOnInit() {
  }
  onSelectedItem(ind: number) {
      this.sservice.addNewItem.next(ind);
  }

}
