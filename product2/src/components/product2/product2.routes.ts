import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Product2Component } from './product2.component';

const product2Routes: Routes = [
  {
    path: '',
    component: Product2Component,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];
export default product2Routes;
