import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestCoastComponent } from './west-coast.component';

describe('WestCoastComponent', () => {
  let component: WestCoastComponent;
  let fixture: ComponentFixture<WestCoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestCoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestCoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
