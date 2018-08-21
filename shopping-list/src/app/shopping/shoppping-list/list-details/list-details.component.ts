import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from '../../shopping.model';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  @Input() shoppingList: ShoppingList;
  @Input() index = 0;
  constructor() { }

  ngOnInit() {
  }

}
