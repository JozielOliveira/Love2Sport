import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCadastroComponent } from './user-cadastro.component';

import { TopMenuCadastroModule } from '../top-menu-cadastro/top-menu-cadastro.module';
import { CadastroInitComponent } from './cadastro-init/cadastro-init.component';
import { CadastroLikeSportComponent } from './cadastro-like-sport/cadastro-like-sport.component';
import { CadastroLocLiveComponent } from './cadastro-loc-live/cadastro-loc-live.component';

@NgModule({
  imports: [
    CommonModule,
    TopMenuCadastroModule
  ],
  declarations: [UserCadastroComponent, CadastroInitComponent, CadastroLikeSportComponent, CadastroLocLiveComponent],
  exports: [
    UserCadastroComponent
  ]
})
export class UserCadastroModule { }
