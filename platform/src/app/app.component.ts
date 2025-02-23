import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'platform-app',
  imports: [RouterOutlet],
  styles: [
    `
      .platform-header {
        background-color: #2196f3;
        color: white;
        padding: 10px 20px;
        text-align: center;
        font-size: 1.2em;
      }
    `
  ],
  template: `
    <div class="platform-header">Platform Application</div>
    <router-outlet />
  `
})
export class AppComponent {
  title = 'platform';
}
