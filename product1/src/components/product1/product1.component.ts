import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'product1',
  imports: [RouterOutlet],
  providers: [],
  template: `<router-outlet></router-outlet> `
})
export class Product1Component {}
