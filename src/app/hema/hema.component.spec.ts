import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemaComponent } from './hema.component';

describe('HemaComponent', () => {
  let component: HemaComponent;
  let fixture: ComponentFixture<HemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
