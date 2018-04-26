import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpendComponent } from './viewpend.component';

describe('ViewpendComponent', () => {
  let component: ViewpendComponent;
  let fixture: ComponentFixture<ViewpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
