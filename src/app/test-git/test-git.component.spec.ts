import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGitComponent } from './test-git.component';

describe('TestGitComponent', () => {
  let component: TestGitComponent;
  let fixture: ComponentFixture<TestGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
