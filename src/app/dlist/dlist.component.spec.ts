import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlistComponent } from './dlist.component';

describe('DlistComponent', () => {
  let component: DlistComponent;
  let fixture: ComponentFixture<DlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
