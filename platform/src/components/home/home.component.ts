import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  template: `
    <h1>Home</h1>
    <p>Welcome to the home page</p>
    <a href="/product1">Product 1</a>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {}
