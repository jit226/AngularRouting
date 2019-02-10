import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Public1Component } from './public1.component';

describe('Public1Component', () => {
  let component: Public1Component;
  let fixture: ComponentFixture<Public1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Public1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Public1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
