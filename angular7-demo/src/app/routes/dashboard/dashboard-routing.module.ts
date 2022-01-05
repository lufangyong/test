import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalysisComponent } from './analysis/analysis.component';
import { WorkplaceComponent } from './workplace/workplace.component';

const routes: Routes = [
  { path: '', redirectTo: 'analysis', pathMatch: 'full' },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'workplace', component: WorkplaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
