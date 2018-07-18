import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCadastroComponent } from '../user-cadastro/user-cadastro.component';
import { TopMenuCadastroComponent } from './top-menu-cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopMenuCadastroComponent
  ],
  exports:[
    TopMenuCadastroComponent
  ]
})
export class TopMenuCadastroModule { }
