/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HadisListItemComponent } from './hadis-list-item.component';

describe('HadisListItemComponent', () => {
  let component: HadisListItemComponent;
  let fixture: ComponentFixture<HadisListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadisListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadisListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
