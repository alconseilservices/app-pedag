import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablePostitComponent } from './editable-postit.component';
import { Idee, ListIdentifier } from 'src/app/@commons/models/murs-idees-domain';
import { FormsModule } from '@angular/forms';

describe('EditablePostitComponent', () => {
  let component: EditablePostitComponent;
  let fixture: ComponentFixture<EditablePostitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablePostitComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablePostitComponent);
    component = fixture.componentInstance;
    component.idee = {
      id : new Date().getTime(),
      tags : [ListIdentifier.LIST1],
      categorie : {id: new Date().getTime(), color: 'grey', name: 'Autre'}
    } as Idee;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
