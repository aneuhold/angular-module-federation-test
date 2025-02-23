import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'product2-app',
  imports: [RouterOutlet],
  styles: [
    `
      .product2-header {
        background-color: #4caf50;
        color: white;
        padding: 10px 20px;
        text-align: center;
        font-size: 1.2em;
      }
    `
  ],
  template: `
    <div class="product2-header">Product 2 Application</div>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product2';
}
