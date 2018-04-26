import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManViewreimbComponent } from './man-viewreimb.component';

describe('ManViewreimbComponent', () => {
  let component: ManViewreimbComponent;
  let fixture: ComponentFixture<ManViewreimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManViewreimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManViewreimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
