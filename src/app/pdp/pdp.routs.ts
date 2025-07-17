import { Routes } from '@angular/router';
import { PdpComponent } from './pdp.component';

export const PDP_ROUTES: Routes = [
  { path: ':productId', component: PdpComponent }
];