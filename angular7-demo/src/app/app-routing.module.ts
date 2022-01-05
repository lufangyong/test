import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'route', loadChildren: './routes/routes.module#RoutesModule' },
  { path: '**', redirectTo: 'route/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: 'route/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  // providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/app-angular' : '/' }]
})
export class AppRoutingModule { }
