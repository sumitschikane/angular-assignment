import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseconceptsComponent } from './baseconcepts.component';

describe('BaseconceptsComponent', () => {
  let component: BaseconceptsComponent;
  let fixture: ComponentFixture<BaseconceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseconceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
