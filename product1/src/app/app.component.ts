import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'product1-app',
  imports: [RouterOutlet],
  styles: [
    `
      .product1-header {
        background-color: #9c27b0;
        color: white;
        padding: 10px 20px;
        text-align: center;
        font-size: 1.2em;
      }
    `
  ],
  template: `
    <div class="product1-header">Product 1 Application</div>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product1';
}
