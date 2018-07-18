import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-cadastro',
  templateUrl: './user-cadastro.component.html',
  styleUrls: ['./user-cadastro.component.css']
})
export class UserCadastroComponent implements OnInit {

  @Input() titlePage: string = '';
  

  constructor() { }

  ngOnInit() {
  }

}
