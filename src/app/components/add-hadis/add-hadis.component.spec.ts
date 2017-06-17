/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddHadisComponent } from './add-hadis.component';

describe('AddHadisComponent', () => {
  let component: AddHadisComponent;
  let fixture: ComponentFixture<AddHadisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHadisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHadisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
