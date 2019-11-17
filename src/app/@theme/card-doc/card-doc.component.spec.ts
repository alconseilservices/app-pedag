import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCardComponent } from './card-doc.component';
import { Mission1 } from 'src/app/@commons/datas/mission1';
import { StepAnalyseDoc } from 'src/app/@commons/models/step-analysedoc';

describe('DocCardComponent', () => {
  let component: DocCardComponent;
  let fixture: ComponentFixture<DocCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCardComponent);
    component = fixture.componentInstance;
    component.activDoc = (Mission1.steps[3] as StepAnalyseDoc).docs[0];
    component.height = '300px';
    component.width = '300px';
    component.index = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide title and show eye icon when card visited', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.theme-card-doc-idx');
    component.activDoc.visited = true;
    fixture.detectChanges();
    const divAfterChange: HTMLElement = fixture.nativeElement.querySelector('.theme-card-doc-idx-visited');
    expect(div.textContent).toEqual('');
    expect(divAfterChange).toBeTruthy();
  });

});
