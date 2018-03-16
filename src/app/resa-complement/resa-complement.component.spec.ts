import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaComplementComponent } from './resa-complement.component';

describe('ResaComplementComponent', () => {
  let component: ResaComplementComponent;
  let fixture: ComponentFixture<ResaComplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaComplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
