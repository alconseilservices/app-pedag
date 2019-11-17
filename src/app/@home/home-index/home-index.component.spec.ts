import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexComponent } from './home-index.component';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeIndexComponent', () => {
  let component: HomeIndexComponent;
  let fixture: ComponentFixture<HomeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIndexComponent ],
      imports: [RouterTestingModule, ThemeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
