import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizListComponent } from './new-quiz-list.component';

describe('NewQuizListComponent', () => {
  let component: NewQuizListComponent;
  let fixture: ComponentFixture<NewQuizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
