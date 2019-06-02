import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssendonComponent } from './essendon.component';

describe('EssendonComponent', () => {
  let component: EssendonComponent;
  let fixture: ComponentFixture<EssendonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssendonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssendonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
