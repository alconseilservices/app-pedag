import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMsgCleComponent } from './card-msg-cle.component';
import { Mission1 } from 'src/app/@commons/datas/mission1';
import { StepMessagesCles } from 'src/app/@commons/models/step-messagescles';

describe('CardMsgCleComponent', () => {
  let component: CardMsgCleComponent;
  let fixture: ComponentFixture<CardMsgCleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMsgCleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMsgCleComponent);
    component = fixture.componentInstance;
    component.activMessage = (Mission1.steps[6] as StepMessagesCles).messagesCles[0];
    component.index = 1;
    component.missionId = Mission1.id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text and hide counter text when visited', () => {
    component.activMessage.visited = true;
    fixture.detectChanges();
    const div1: HTMLElement = fixture.nativeElement.querySelector('.theme-card-msg-cle-badge');
    const div2: HTMLElement = fixture.nativeElement.querySelector('.theme-card-msg-cle-text');
    expect(div1).toBeNull();
    expect(div2).toBeTruthy();
  });

});
