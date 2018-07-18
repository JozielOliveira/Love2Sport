import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MsgComponent } from './msg/msg.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatComponent,
    MsgComponent
  ],
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
