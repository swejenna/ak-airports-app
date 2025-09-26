import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home').then(c => c.Home) },
    { path: 'home', loadComponent: () => import('./components/home/home').then(c => c.Home) },
    { path: 'airports', loadComponent: () => import('./components/airports/airports').then(c => c.Airports) },
    { path: 'info', loadComponent: () => import('./components/info/info').then(c => c.Info) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
