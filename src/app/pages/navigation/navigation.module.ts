import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [NavigationComponent,],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,

  ]
})
export class NavigationModule { }
