import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  // 构造函数中使用 ElementRef 来注入宿主 DOM 元素的引用
  constructor(private el: ElementRef) { }

  // 监听宿主元素mousenter事件
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  // 监听宿主元素mousenter事件
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    // ElementRef通过其 nativeElement 属性,提供直接访问宿主 DOM 元素的能力。
    this.el.nativeElement.style.backgroundColor = color;
  }
}
