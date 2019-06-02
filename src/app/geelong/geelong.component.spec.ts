import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeelongComponent } from './geelong.component';

describe('GeelongComponent', () => {
  let component: GeelongComponent;
  let fixture: ComponentFixture<GeelongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeelongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeelongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
