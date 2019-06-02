import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthMelbourneComponent } from './north-melbourne.component';

describe('NorthMelbourneComponent', () => {
  let component: NorthMelbourneComponent;
  let fixture: ComponentFixture<NorthMelbourneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthMelbourneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthMelbourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
