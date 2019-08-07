import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptpaymentsComponent } from './acceptpayments.component';

describe('AcceptpaymentsComponent', () => {
  let component: AcceptpaymentsComponent;
  let fixture: ComponentFixture<AcceptpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
