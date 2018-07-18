import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuDefaultComponent } from './top-menu-default.component';

describe('TopMenuDefaultComponent', () => {
  let component: TopMenuDefaultComponent;
  let fixture: ComponentFixture<TopMenuDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
