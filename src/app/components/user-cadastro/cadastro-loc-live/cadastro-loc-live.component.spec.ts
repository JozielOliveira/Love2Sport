import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLocLiveComponent } from './cadastro-loc-live.component';

describe('CadastroLocLiveComponent', () => {
  let component: CadastroLocLiveComponent;
  let fixture: ComponentFixture<CadastroLocLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLocLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLocLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
