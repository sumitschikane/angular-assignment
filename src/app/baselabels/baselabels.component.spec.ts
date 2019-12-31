import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselabelsComponent } from './baselabels.component';

describe('BaselabelsComponent', () => {
  let component: BaselabelsComponent;
  let fixture: ComponentFixture<BaselabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
