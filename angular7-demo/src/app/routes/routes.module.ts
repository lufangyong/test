import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routerModule } from './routes-routing.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        routerModule,
        LayoutModule
    ]
})

export class RoutesModule {}
