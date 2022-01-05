import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { yuan } from '@shared';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.styl'],
  providers: [DashboardService]
})
export class AnalysisComponent implements OnInit {
  result: any = 0;
  html = '<div class="s">fsfsfsaw</dvi><xml>sosrje</xml>';

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    console.log('yuan :>> ', yuan(23424));
    this.dashboardService.layoutSize$.subscribe(res => {
      console.log('res :>> ', res);
      this.result = res;
      // this.cdr.markForCheck();
    });
  }

  fetch(): void {
    this.dashboardService.changeLayoutSize();
  }
}
