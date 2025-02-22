import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Product1Component } from './product1.component';

const product1Routes: Routes = [
  {
    path: '',
    component: Product1Component,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];
export default product1Routes;
