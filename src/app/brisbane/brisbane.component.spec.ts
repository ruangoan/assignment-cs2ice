import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisbaneComponent } from './brisbane.component';

describe('BrisbaneComponent', () => {
  let component: BrisbaneComponent;
  let fixture: ComponentFixture<BrisbaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrisbaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisbaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
