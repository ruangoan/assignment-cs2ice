import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FremantleComponent } from './fremantle.component';

describe('FremantleComponent', () => {
  let component: FremantleComponent;
  let fixture: ComponentFixture<FremantleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FremantleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FremantleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
