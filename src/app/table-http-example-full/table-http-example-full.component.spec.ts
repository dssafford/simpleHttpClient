import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHttpExampleFullComponent } from './table-http-example-full.component';

describe('TableHttpExampleFullComponent', () => {
  let component: TableHttpExampleFullComponent;
  let fixture: ComponentFixture<TableHttpExampleFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHttpExampleFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHttpExampleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
