import { Component, computed, inject } from '@angular/core';
import { Cart } from '../../../services/cart';
import { PrimaryButton } from "../../../components/primary-button/primary-button";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 mt-2">
          <span class="text-lg">Total</span>
          <span class="text-lg font-bold">{{'$' + total() }}</span>
        </div>
        <app-primary-button label="Proceed to Checkout"/>
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummary {
  cart = inject(Cart);

  total = computed(() => {
    let total = 0;
    for(const item of this.cart.cart()) {
      total += item.price;
    }

    return total;
  })
}
