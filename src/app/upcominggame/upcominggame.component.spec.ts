import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcominggameComponent } from './upcominggame.component';

describe('UpcominggameComponent', () => {
  let component: UpcominggameComponent;
  let fixture: ComponentFixture<UpcominggameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcominggameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcominggameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
