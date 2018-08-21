import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ItemModel } from '../../item.model';
import { ShoppingService } from '../../shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingList } from '../../shopping.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  itemForm: FormGroup;
  id: number;
  subscription: Subscription;
  editMode = true;
  constructor(private service: ShoppingService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (parms: Params) => {
        this.id = +parms['id'];
        this.editMode = parms['id'] != null;
      }
    );
    this.initForm();
  }
  private initForm() {
    let listName = '';
    // tslint:disable-next-line:prefer-const
    let itemsList = new FormArray([]);
    if (this.editMode) {
      const shopList = this.service.getShoppingList(this.id);
      listName = shopList.listName;
      if (shopList['items']) {
        // tslint:disable-next-line:prefer-const
        for (let itemlist of shopList.items) {
          itemsList.push(
            new FormGroup({
              name: new FormControl(itemlist.name),
              amount: new FormControl(itemlist.amount)
            })
          );
        }
      }
    }
    this.itemForm = new FormGroup({
      listNm: new FormControl(listName),
      items: itemsList
    });
  }
}
