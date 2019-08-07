import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExistComponent } from './user-exist.component';

describe('UserExistComponent', () => {
  let component: UserExistComponent;
  let fixture: ComponentFixture<UserExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserExistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
