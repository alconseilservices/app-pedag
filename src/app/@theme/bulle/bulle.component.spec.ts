import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulleComponent } from './bulle.component';
import { StepConseilsExpert } from 'src/app/@commons/models/step-conseilsexp';
import { Mission1 } from 'src/app/@commons/datas/mission1';
import { By } from '@angular/platform-browser';

describe('BulleComponent', () => {
  let component: BulleComponent;
  let fixture: ComponentFixture<BulleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulleComponent);
    component = fixture.componentInstance;
    component.width = '300px';
    component.height = '300px';
    component.activMission = Mission1;
    component.activConseil = (Mission1.steps[4] as StepConseilsExpert).conseils[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image as background inside bulle container', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.theme-bulle-container');
    expect(div.style.background).toEqual('url("./assets/images/m1/exp_camille.png") center -10% / 70% no-repeat, rgb(136, 231, 201)');
  });
});
