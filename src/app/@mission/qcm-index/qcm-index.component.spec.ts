import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmIndexComponent } from './qcm-index.component';

describe('QcmIndexComponent', () => {
  let component: QcmIndexComponent;
  let fixture: ComponentFixture<QcmIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
