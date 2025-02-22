import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  template: `
    <h1>Home</h1>
    <p>Welcome to the home page</p>
    <ul>
      <li><a href="/product1">Product 1</a></li>
      <li><a href="/product2">Product 2</a></li>
    </ul>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {}
