import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutBasicComponent } from './basic/basic.component';

const COMPONENTS = [LayoutBasicComponent];

const HEADERCOMPONENTS = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  // @ts-ignore
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
