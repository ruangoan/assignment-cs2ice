import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortAdelaideComponent } from './port-adelaide.component';

describe('PortAdelaideComponent', () => {
  let component: PortAdelaideComponent;
  let fixture: ComponentFixture<PortAdelaideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortAdelaideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortAdelaideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
