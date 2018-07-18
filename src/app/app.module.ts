import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserCadastroModule } from './components/user-cadastro/user-cadastro.module';
import { TopMenuDefaultComponent } from './components/top-menu-default/top-menu-default.component';
import { MainPageModule } from './components/main-page/main-page.module';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuDefaultComponent
  ],
  imports: [
    BrowserModule,
    UserCadastroModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
