import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmDecisionComponent } from './qcm-decision.component';

describe('QcmDecisionComponent', () => {
  let component: QcmDecisionComponent;
  let fixture: ComponentFixture<QcmDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
