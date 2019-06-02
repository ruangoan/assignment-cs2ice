import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarltonComponent } from './carlton.component';

describe('CarltonComponent', () => {
  let component: CarltonComponent;
  let fixture: ComponentFixture<CarltonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarltonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
