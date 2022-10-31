import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {NoPreloading, provideRouter, Routes, withPreloading} from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-inject',
    pathMatch: 'full'
  },
  {
    path: 'form-control-nullable',
    loadComponent: () => import('./app/form-control-nullable.component').then(m => m.FormControlNullableComponent)
  },
  {
    path: 'form-control-not-nullable',
    loadComponent: () => import('./app/form-control-not-nullable.component').then(m => m.FormControlNotNullableComponent)
  },
  {
    path: 'form-builder-not-nullable',
    loadComponent: () => import('./app/form-builder-not-nullable.component').then(m => m.FormBuilderNotNullableComponent)
  },
  {
    path: 'form-record',
    loadComponent: () => import('./app/form-record.component').then(m => m.FormRecordComponent)
  },
  {
    path: 'untyped',
    loadComponent: () => import('./app/untyped.component').then(m => m.UntypedComponent)
  },
]

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes,
      withPreloading(NoPreloading)
    )]
});
