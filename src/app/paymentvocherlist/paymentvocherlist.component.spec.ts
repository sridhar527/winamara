import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentvocherlistComponent } from './paymentvocherlist.component';

describe('PaymentvocherlistComponent', () => {
  let component: PaymentvocherlistComponent;
  let fixture: ComponentFixture<PaymentvocherlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentvocherlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentvocherlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
