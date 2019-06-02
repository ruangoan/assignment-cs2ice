import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StKildaComponent } from './st-kilda.component';

describe('StKildaComponent', () => {
  let component: StKildaComponent;
  let fixture: ComponentFixture<StKildaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StKildaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StKildaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
