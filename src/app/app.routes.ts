import { Routes } from '@angular/router';
import { InitialInputsComponent } from './initial-inputs/initial-inputs.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: InitialInputsComponent }, // Default route
  {path: 'main-page', component: MainPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown paths to the default route
];