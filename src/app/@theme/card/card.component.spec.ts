import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Mission1 } from 'src/app/@commons/datas/mission1';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { of } from 'rxjs';
import { ConfirmPopinService } from '../confirm-popin/confirm-popin.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let missionsServiceSpy: jasmine.SpyObj<MissionsService>;
  let confirmPopinServiceSpy: jasmine.SpyObj<ConfirmPopinService>;


  beforeEach(async(() => {
    const spy1 = jasmine.createSpyObj('MissionsService', ['mission']);
    const spy2 = jasmine.createSpyObj('ConfirmPopinService', ['popin']);
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [
        { provide: MissionsService, useValue: spy1 },
        { provide: ConfirmPopinService, useValue: spy2 }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    missionsServiceSpy = TestBed.get(MissionsService);
    confirmPopinServiceSpy = TestBed.get(ConfirmPopinService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.mission = Mission1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card background', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.theme-card-container');
    expect(div.style.backgroundImage).toEqual('url("assets/images/m1/menu_card_bg.png")');
  });

  it('should render level when provided', () => {
    component.mission.level = '1';
    fixture.detectChanges();
    const div: HTMLElement = fixture.nativeElement.querySelector('.theme-card-header-badge');
    expect(div).toBeTruthy();
    expect(div.textContent).toEqual('1');
  });

  it('should render mission name', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.theme-card-header-title');
    expect(div.textContent).toEqual('Zoom sur le mix énergétique');
  });

  it('should call mission service when mission choosed', () => {
    missionsServiceSpy.mission.and.returnValue(of(Mission1));
    fixture.nativeElement.querySelector('.theme-card-header-btn-mission').click();
    expect(missionsServiceSpy.mission.calls.count()).toBe(1, 'spy method was called once');
  });

});
