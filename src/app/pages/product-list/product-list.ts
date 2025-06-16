import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card/product-card'; // Adjust the path if needed
import { concatAll } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true, // ✅ Mark as standalone
  imports: [ProductCard], // ✅ Import the ProductCard component
  template: `
    <div class="p-8 grid grid-cols-3 gap-4">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``
})
export class ProductList {

  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    this.products.set(data);
  }
  products = signal<Product[]>([
    // {
    //   id: 1,
    //   title: 'Polo Shirts',
    //   price: 109.99,
    //   image: 'https://images.app.goo.gl/ixybKm2bjsSXKMip9',
    //   stock: 10,
    // },
    // {
    //   id: 2,
    //   title: 'Stafanno Ricci',
    //   price: 89,
    //   image: 'https://images.app.goo.gl/EKRFJomqbcmBg6NS8',
    //   stock: 30,
    // },
    // {
    //   id: 3,
    //   title: 'Zip Polo',
    //   price: 99.99,
    //   image: 'https://images.app.goo.gl/AkZRukfttMBDgEkK7',
    //   stock: 20,
    // },
    // {
    //   id: 4,
    //   title: 'Gucci',
    //   price: 50.99,
    //   image: 'https://images.app.goo.gl/9L4yaQ1CtG1R15E8A',
    //   stock: 42,
    // },
    // {
    //   id: 5,
    //   title: 'Nike',
    //   price: 30,
    //   image: 'https://images.app.goo.gl/yVbmELd6ZZUr4am98',
    //   stock: 50,
    // },
    // {
    //   id: 6,
    //   title: 'Nike',
    //   price: 30,
    //   image: 'https://images.app.goo.gl/yVbmELd6ZZUr4am98',
    //   stock: 45,
    // }
  ]);
}
