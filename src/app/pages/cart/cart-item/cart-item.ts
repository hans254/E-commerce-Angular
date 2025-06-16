import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Button } from "../../../components/button/button";
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [Button],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex">
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ '$' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button label="Remove" (btnClicked)="cart.removeFromCart(item().id)"/>
    </div>
    
  `,
  styles: ``
})
export class CartItem {

  cart = inject(Cart)
  item = input.required<Product>();
}
