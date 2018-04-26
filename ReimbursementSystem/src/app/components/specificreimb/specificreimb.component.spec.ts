import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificreimbComponent } from './specificreimb.component';

describe('SpecificreimbComponent', () => {
  let component: SpecificreimbComponent;
  let fixture: ComponentFixture<SpecificreimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificreimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificreimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
