import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuCadastroComponent } from './top-menu-cadastro.component';

describe('TopMenuCadastroComponent', () => {
  let component: TopMenuCadastroComponent;
  let fixture: ComponentFixture<TopMenuCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
