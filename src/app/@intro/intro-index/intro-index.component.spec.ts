import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroIndexComponent } from './intro-index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { FilterMandatoryMissionPipe } from '../pipes/filter-mandatory-mission.pipe';

describe('INtroIndexComponent', () => {
  let component: IntroIndexComponent;
  let fixture: ComponentFixture<IntroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroIndexComponent, FilterMandatoryMissionPipe ],
      imports: [RouterTestingModule, ThemeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
