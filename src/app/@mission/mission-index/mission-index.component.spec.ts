import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionIndexComponent } from './mission-index.component';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MissionIndexComponent', () => {
  let component: MissionIndexComponent;
  let fixture: ComponentFixture<MissionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionIndexComponent ],
      imports: [RouterTestingModule, ThemeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
