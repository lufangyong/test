import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBasicComponent } from '../layout/basic/basic.component';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: LayoutBasicComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        ]
    }
];

export const routerModule: ModuleWithProviders = RouterModule.forChild(appRoutes);
