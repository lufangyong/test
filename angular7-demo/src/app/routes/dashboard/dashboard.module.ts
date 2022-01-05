import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WorkplaceComponent } from './workplace/workplace.component';
import { SharedModule } from '@shared';

const COMPONENTS = [AnalysisComponent, WorkplaceComponent];

@NgModule({
  declarations: [
    // @ts-ignore
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
