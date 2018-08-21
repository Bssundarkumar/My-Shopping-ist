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
import { EditListComponent } from './shopping/shoppping-list-details/edit-list/edit-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ShopppingListDetailsComponent,
    ShopppingListComponent,
    ListDetailsComponent,
    HeaderComponent,
    EditListComponent
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
