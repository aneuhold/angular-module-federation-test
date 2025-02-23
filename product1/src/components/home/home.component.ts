import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  styles: [
    `
      .product1-container {
        padding: 20px;
        background-color: #f3e5f5;
        border: 2px solid #9c27b0;
        border-radius: 8px;
        margin: 20px;
      }
      .nav-links {
        margin-top: 20px;
      }
      .nav-links a {
        color: #9c27b0;
        text-decoration: none;
      }
      .nav-links a:hover {
        text-decoration: underline;
      }
    `
  ],
  template: `
    <div class="product1-container">
      <h1>Product 1 Home</h1>
      <p>You are currently in Product 1's application</p>
      <div class="nav-links">
        <a href="/">Back to Platform</a>
      </div>
    </div>
  `
})
export class HomeComponent {}
