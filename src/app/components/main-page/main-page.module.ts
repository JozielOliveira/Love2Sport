import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainPageComponent } from './main-page.component';
import { PostComponent } from './post/post.component';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  imports: [
    CommonModule,
    ChatModule
  ],
  declarations: [
    LeftMenuComponent,
    MainPageComponent,
    PostComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
