import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  styles: [
    `
      .product2-container {
        padding: 20px;
        background-color: #e8f5e9;
        border: 2px solid #4caf50;
        border-radius: 8px;
        margin: 20px;
      }
      .nav-links {
        margin-top: 20px;
      }
      .nav-links a {
        color: #4caf50;
        text-decoration: none;
      }
      .nav-links a:hover {
        text-decoration: underline;
      }
    `
  ],
  template: `
    <div class="product2-container">
      <h1>Product 2 Home</h1>
      <p>You are currently in Product 2's application</p>
      <div class="nav-links">
        <a href="/">Back to Platform</a>
      </div>
    </div>
  `
})
export class HomeComponent {}
