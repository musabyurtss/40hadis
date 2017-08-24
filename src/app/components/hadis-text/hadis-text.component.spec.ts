import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadisTextComponent } from './hadis-text.component';

describe('HadisTextComponent', () => {
  let component: HadisTextComponent;
  let fixture: ComponentFixture<HadisTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadisTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadisTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
