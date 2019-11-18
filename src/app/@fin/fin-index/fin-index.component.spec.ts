import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinIndexComponent } from './fin-index.component';

describe('FinIndexComponent', () => {
  let component: FinIndexComponent;
  let fixture: ComponentFixture<FinIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
