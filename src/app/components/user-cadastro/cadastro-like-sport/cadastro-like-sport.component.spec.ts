import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLikeSportComponent } from './cadastro-like-sport.component';

describe('CadastroLikeSportComponent', () => {
  let component: CadastroLikeSportComponent;
  let fixture: ComponentFixture<CadastroLikeSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLikeSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLikeSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
