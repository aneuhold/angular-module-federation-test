import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'product1',
    loadChildren: () => loadRemoteModule('product1', './product1Routes')
  }
  // {
  //   path: 'product2',
  //   loadChildren: () => import('product2/app').then((m) => m.app)
  // }
];
