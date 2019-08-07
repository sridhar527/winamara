import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsalesComponent } from './tagsales.component';

describe('TagsalesComponent', () => {
  let component: TagsalesComponent;
  let fixture: ComponentFixture<TagsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
