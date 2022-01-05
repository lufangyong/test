import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoreComponent, NoDataComponent } from './components';
import { HighlightDirective, DynamicComDirective } from './directives';
import { TextEllipsisPipe } from './pipes';

// #region your componets & directives
const COMPONENTS: Type<any>[] = [MoreComponent, NoDataComponent];
const DIRECTIVES: Type<any>[] = [HighlightDirective, DynamicComDirective];
const PIPES: Type<any>[] = [TextEllipsisPipe];
// #endregion

export const dynamicComMap = COMPONENTS.reduce((acc: any, com: any) => {
  acc[com.name] = com;
  return acc;
}, {});

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // your components
    // @ts-ignore
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  entryComponents: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
