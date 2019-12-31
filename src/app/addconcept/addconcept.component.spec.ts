import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconceptComponent } from './addconcept.component';

describe('AddconceptComponent', () => {
  let component: AddconceptComponent;
  let fixture: ComponentFixture<AddconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
