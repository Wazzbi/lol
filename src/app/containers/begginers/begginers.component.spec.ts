/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BegginersComponent } from './begginers.component';

describe('BegginersComponent', () => {
  let component: BegginersComponent;
  let fixture: ComponentFixture<BegginersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegginersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegginersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
