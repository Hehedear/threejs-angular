import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import {NzAvatarModule, NzButtonModule, NzFormModule, NzListModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MessageComponent],
  exports: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    NzCommentModule,
    NzListModule,
    NzAvatarModule,
    FormsModule,
    NzFormModule,
    NzButtonModule
  ]
})
export class MessageModule { }
