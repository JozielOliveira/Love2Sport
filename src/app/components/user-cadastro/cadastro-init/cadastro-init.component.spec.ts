import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInitComponent } from './cadastro-init.component';

describe('CadastroInitComponent', () => {
  let component: CadastroInitComponent;
  let fixture: ComponentFixture<CadastroInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
