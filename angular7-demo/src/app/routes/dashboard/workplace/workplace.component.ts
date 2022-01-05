import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.styl']
})
export class WorkplaceComponent implements OnInit {
  config = {
    position: 'top'
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  handleClick() {
    // this.config.position = 'bottom';
    // console.log('config :>> ', this.config);
    this.config = {
      position: 'bottom'
    };
    this.cdr.markForCheck();
  }

}
