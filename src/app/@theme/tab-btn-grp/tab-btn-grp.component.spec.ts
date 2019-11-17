import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBtnGrpComponent } from './tab-btn-grp.component';

describe('TabBtnGrpComponent', () => {
  let component: TabBtnGrpComponent;
  let fixture: ComponentFixture<TabBtnGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBtnGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBtnGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
