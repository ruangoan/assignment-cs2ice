import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGameTableComponent } from './view-game-table.component';

describe('ViewGameTableComponent', () => {
  let component: ViewGameTableComponent;
  let fixture: ComponentFixture<ViewGameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
