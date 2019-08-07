import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleeditComponent } from './saleedit.component';

describe('SaleeditComponent', () => {
  let component: SaleeditComponent;
  let fixture: ComponentFixture<SaleeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
