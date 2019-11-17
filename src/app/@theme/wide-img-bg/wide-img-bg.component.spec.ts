import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WideImgBgComponent } from './wide-img-bg.component';

describe('WideImgBgComponent', () => {
  let component: WideImgBgComponent;
  let fixture: ComponentFixture<WideImgBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideImgBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideImgBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
