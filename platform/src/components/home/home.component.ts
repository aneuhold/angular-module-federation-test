import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  styles: [
    `
      .platform-container {
        padding: 20px;
        background-color: #e6f3ff;
        border: 2px solid #2196f3;
        border-radius: 8px;
        margin: 20px;
      }
      .nav-links {
        margin-top: 20px;
      }
      .nav-links a {
        margin-right: 15px;
        color: #2196f3;
        text-decoration: none;
      }
      .nav-links a:hover {
        text-decoration: underline;
      }
    `
  ],
  template: `
    <div class="platform-container">
      <h1>Platform Home</h1>
      <p>You are currently in the main platform application</p>
      <div class="nav-links">
        <a href="/product1">Go to Product 1</a>
        <a href="/product2">Go to Product 2</a>
      </div>
    </div>
  `
})
export class HomeComponent {}
