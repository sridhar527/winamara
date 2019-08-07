import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyreportComponent } from './weeklyreport.component';

describe('WeeklyreportComponent', () => {
  let component: WeeklyreportComponent;
  let fixture: ComponentFixture<WeeklyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
