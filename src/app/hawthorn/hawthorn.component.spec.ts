import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawthornComponent } from './hawthorn.component';

describe('HawthornComponent', () => {
  let component: HawthornComponent;
  let fixture: ComponentFixture<HawthornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawthornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawthornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
