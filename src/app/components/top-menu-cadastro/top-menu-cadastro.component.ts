import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu-cadastro',
  templateUrl: './top-menu-cadastro.component.html'
})
export class TopMenuCadastroComponent{

  @Input() titleMenu : string = '';

  constructor() { }

}
