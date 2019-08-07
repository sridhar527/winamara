import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphitesComponent } from './graphites.component';

describe('GraphitesComponent', () => {
  let component: GraphitesComponent;
  let fixture: ComponentFixture<GraphitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
