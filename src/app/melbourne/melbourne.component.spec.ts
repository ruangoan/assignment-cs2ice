import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelbourneComponent } from './melbourne.component';

describe('MelbourneComponent', () => {
  let component: MelbourneComponent;
  let fixture: ComponentFixture<MelbourneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelbourneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelbourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
