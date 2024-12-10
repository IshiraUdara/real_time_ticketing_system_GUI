import { Routes } from '@angular/router';
import { InitialInputsComponent } from './initial-inputs/initial-inputs.component';

export const routes: Routes = [
  { path: '', component: InitialInputsComponent }, // Default route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown paths to the default route
];