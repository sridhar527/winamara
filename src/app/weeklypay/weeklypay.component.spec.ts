import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklypayComponent } from './weeklypay.component';

describe('WeeklypayComponent', () => {
  let component: WeeklypayComponent;
  let fixture: ComponentFixture<WeeklypayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklypayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklypayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
