import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCoastComponent } from './gold-coast.component';

describe('GoldCoastComponent', () => {
  let component: GoldCoastComponent;
  let fixture: ComponentFixture<GoldCoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldCoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldCoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
