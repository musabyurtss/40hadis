/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HadisListComponent } from './hadis-list.component';

describe('HadisListComponent', () => {
  let component: HadisListComponent;
  let fixture: ComponentFixture<HadisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
