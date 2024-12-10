
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { importProvidersFrom } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { routes } from './app.routes';



bootstrapApplication(AppComponent, {

  providers: [

    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes))

  ]

}).catch(err => console.error(err));
