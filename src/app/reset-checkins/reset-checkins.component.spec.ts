import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetCheckinsComponent } from './reset-checkins.component';

describe('ResetCheckinsComponent', () => {
  let component: ResetCheckinsComponent;
  let fixture: ComponentFixture<ResetCheckinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetCheckinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetCheckinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
