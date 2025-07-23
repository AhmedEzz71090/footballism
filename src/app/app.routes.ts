import { Routes } from '@angular/router';
import {Landing} from './features/landing/landing';
import {Countries} from './features/countries/countries';

export const routes: Routes = [
  {path: '', component: Landing},
  {path: 'countries', component: Countries}
];
