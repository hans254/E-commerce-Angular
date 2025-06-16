import { Component, inject } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButton, RouterLink],
  template: `
    <div class="bg-slate-100 px-10 py-3 flex justify-between items-center">
      <button routerLink="/" class="text-xl font-bold">My Store</button>
      <app-primary-button [label]="'Cart (' + cart.cart().length + ')'" routerLink="/cart"/>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  cart = inject(Cart);
}
