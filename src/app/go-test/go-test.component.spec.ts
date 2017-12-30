import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTestComponent } from './go-test.component';

describe('GoTestComponent', () => {
  let component: GoTestComponent;
  let fixture: ComponentFixture<GoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
