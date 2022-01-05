import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, shareReplay, debounceTime } from 'rxjs/operators';

@Injectable()
export class DashboardService {

  layoutSize$ = new Subject();
  // protected layoutSizeChange$ = this.layoutSize$.pipe(
  //   // shareReplay({ refCount: true }),
  // );

  changeLayoutSize() {
    this.layoutSize$.next(1);
  }
}
