import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 导入router服务


@Component({
  selector: 'app-layout-blank',
  template: `
    <h1>basic layout</h1>
    <ul>
      <li (click)="goto('analysis')"><a>分析</a></li>
      <li><a [routerLink]="['/route/dashboard/dashboard/workplace']" [queryParams]="{id:key}">工作台</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class LayoutBasicComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // 跳转到login路由（绝对路径）
    // this.router.navigateByUrl('route/dashboard/dashboard/workplace');
  }

  goto(route: string): void {
    console.log('goto :>> ', route);
    this.router.navigateByUrl(`route/dashboard/dashboard/${route}`);
  }
}
