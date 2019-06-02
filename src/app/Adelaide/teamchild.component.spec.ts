import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamchildComponent } from './teamchild.component';

describe('TeamchildComponent', () => {
  let component: TeamchildComponent;
  let fixture: ComponentFixture<TeamchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
