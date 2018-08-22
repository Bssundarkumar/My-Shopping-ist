import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShopppingListDetailsComponent } from './shopping/shoppping-list-details/shoppping-list-details.component';
import { ShopppingListComponent } from './shopping/shoppping-list/shoppping-list.component';
import { ListDetailsComponent } from './shopping/shoppping-list/list-details/list-details.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingService } from './shopping/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemListComponent } from './shopping/item-list/item-list.component';
import { ItemDetailComponent } from './shopping/item-list/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShopppingListDetailsComponent,
    ShopppingListComponent,
    ListDetailsComponent,
    HeaderComponent,
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
