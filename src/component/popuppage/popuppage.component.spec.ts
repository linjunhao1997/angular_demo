/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopuppageComponent } from './popuppage.component';

describe('PopuppageComponent', () => {
  let component: PopuppageComponent;
  let fixture: ComponentFixture<PopuppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
