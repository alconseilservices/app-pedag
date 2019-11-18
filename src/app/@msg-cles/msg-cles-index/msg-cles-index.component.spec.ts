import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgClesIndexComponent } from './msg-cles-index.component';

describe('MsgClesIndexComponent', () => {
  let component: MsgClesIndexComponent;
  let fixture: ComponentFixture<MsgClesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgClesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgClesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
