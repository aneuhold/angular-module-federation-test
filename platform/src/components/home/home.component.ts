import { Component } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  template: `
    <h1>Home</h1>
    <p>Welcome to the home page</p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'platform';
}
