import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShopppingListDetailsComponent } from './shopping/shoppping-list-details/shoppping-list-details.component';
const appRoute: Routes = [
    {path: 'shoppingList', component: ShoppingComponent, children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: '+0', component: ShopppingListDetailsComponent},
      {path: ':id', component: ShopppingListDetailsComponent}
    ]},
    {path: '', redirectTo: 'shoppingList', pathMatch: 'full'}
];
@NgModule({
  imports: [
   RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
