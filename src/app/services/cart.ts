import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Polo Shirts',
      price: 109.99,
      image: 'https://images.app.goo.gl/ixybKm2bjsSXKMip9',
      stock: 10,
    },
    {
      id: 2,
      title: 'Stafanno Ricci',
      price: 89,
      image: 'https://images.app.goo.gl/EKRFJomqbcmBg6NS8',
      stock: 30,
    },
  ]);

  addToCart(product: Product){
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
