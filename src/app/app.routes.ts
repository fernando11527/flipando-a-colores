import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'productos', component: ProductosComponent }
];