import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu-default',
  templateUrl: './top-menu-default.component.html',
  styleUrls: ['./top-menu-default.component.css']
})
export class TopMenuDefaultComponent implements OnInit {

  @Input() titleMenu : string = '';

  constructor() { }

  ngOnInit() {
  }

}
