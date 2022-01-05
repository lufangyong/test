import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-more',
  template: `
    <h2>more component {{config.position}}</h2>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreComponent implements OnInit, OnChanges {
  @Input() config;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes :>> ', changes);
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

}
