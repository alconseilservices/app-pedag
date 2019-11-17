import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSolutionComponent } from './card-solution.component';
import { Mission1 } from 'src/app/@commons/datas/mission1';
import { StepPropositionSolutions } from 'src/app/@commons/models/step-propsolutions';

describe('CardSolutionComponent', () => {
  let component: CardSolutionComponent;
  let fixture: ComponentFixture<CardSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSolutionComponent);
    component = fixture.componentInstance;
    component.activSolution = (Mission1.steps[5] as StepPropositionSolutions).solutions[0];
    component.index = 1;
    component.missionId = Mission1.id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should card texts', () => {
    const divTxt: HTMLElement = fixture.nativeElement.querySelector('.theme-card-sol-panel-txt');
    const divBadge: HTMLElement = fixture.nativeElement.querySelector('.theme-card-sol-badge');
    expect(divTxt.textContent).toBeTruthy();
    expect(divBadge.textContent).toBeTruthy();
  });

});
