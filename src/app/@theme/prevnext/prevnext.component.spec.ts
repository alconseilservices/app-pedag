import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevnextComponent } from './prevnext.component';

describe('PrevnextComponent', () => {
  let component: PrevnextComponent;
  let fixture: ComponentFixture<PrevnextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevnextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
