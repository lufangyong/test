import { Directive, OnInit, ComponentFactoryResolver, ElementRef, Injector, ApplicationRef, Input, Renderer2 } from '@angular/core';
import { dynamicComMap } from '../../shared.module';

@Directive({
  selector: '[appDynamicCom]'
})
export class DynamicComDirective implements OnInit {
  @Input() component: any;

  // @Input() models = [];  // 动态加载的组件的输入型属性
  // @Input() events = [];  // 动态加载的组件的事件型属性

  constructor(
    private cfr: ComponentFactoryResolver,
    private elementRef: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadComponent();
    });
  }

  loadComponent() {
    const com = this.cfr.resolveComponentFactory(dynamicComMap[this.component]).create(this.injector);
    // 通知应用去处理这个组件的视图，对这个组件进行脏检查：呈现组件的视图
    this.appRef.attachView(com.hostView);
    // 绑定属性
    // this.models.forEach(model => {
    //   if (model.value) {
    //     (com.instance)[model.field] = model.value || undefined;
    //   }
    // });
    this.elementRef.nativeElement.appendChild((com.hostView as any).rootNodes[0]);
  }

}
