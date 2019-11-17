import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerStackComponent } from './layer-stack.component';

describe('LayoutComponent', () => {
  let component: LayerStackComponent;
  let fixture: ComponentFixture<LayerStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
