import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulldogsComponent } from './bulldogs.component';

describe('BulldogsComponent', () => {
  let component: BulldogsComponent;
  let fixture: ComponentFixture<BulldogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulldogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulldogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
