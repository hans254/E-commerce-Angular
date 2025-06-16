import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductList } from "./pages/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
  <app-header />
  <router-outlet />
  `,
  styles: ``,
})
export class App {
  protected title = 'E-commerce-angular';
}
