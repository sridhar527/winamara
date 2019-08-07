import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabresultComponent } from './labresult.component';

describe('LabresultComponent', () => {
  let component: LabresultComponent;
  let fixture: ComponentFixture<LabresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
