import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterContentChecked, HostListener } from '@angular/core';
import { Idee, Categorie } from 'src/app/@commons/models/murs-idees-domain';
import { IdeesServiceService } from 'src/app/@commons/services/idees-service.service';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-editable-postit',
  templateUrl: './editable-postit.component.html',
  styleUrls: ['./editable-postit.component.css']
})
export class EditablePostitComponent implements OnInit, AfterContentChecked {

  @Input() marginHorizontal: string;
  @Input() marginVertical: string;
  @Input() idee: Idee;
  @Input() categorie: Categorie;
  @Output() postitDeletion: EventEmitter<number> = new EventEmitter();
  @ViewChild('postittext') postittext: ElementRef;
  @ViewChild('dropdowncontent') dropdowncontent: ElementRef;
  @Input() editableColorBadge: boolean;
  categorieList: Categorie[] = [];
  ideesListOpened = false;

  constructor(private ideesServiceService: IdeesServiceService, private sanitizer: DomSanitizer) {}

  @HostListener('document:click', ['$event'])
  clickhandling(event) {
    if (this.dropdowncontent) {
      if (
          this.dropdowncontent.nativeElement.parentElement.contains(event.target)
          && !this.dropdowncontent.nativeElement.contains(event.target)
        ) {
        this.dropdowncontent.nativeElement.style.display = 'block';
      } else {
        if (this.dropdowncontent.nativeElement.style.display === 'block') {
          this.dropdowncontent.nativeElement.style.display = 'none';
        }
      }
    }
  }

  ngAfterContentChecked() {
    this.updateElementHeight();
  }

  ngOnInit() {
    this.categorieList = this.ideesServiceService.categoriesListSource.getValue();
    this.ideesServiceService.categoriesListSource$
      .subscribe((categories: Categorie[]) => {
        this.categorieList = categories;
      });
    this.updateElementHeight();
  }

  deletePostIt() {
    if (this.idee) {
      this.ideesServiceService.removeIdee(this.idee.id);
    } else {
      this.ideesServiceService.removeCategorie(this.categorie.id);
    }
  }

  onInput(event: any) {
    this.updateElementHeight();
  }

  updateElementHeight() {
    if (this.postittext) {
      this.postittext.nativeElement.style.height = '';
      this.postittext.nativeElement.style.height = this.postittext.nativeElement.scrollHeight + 'px';
    }
  }

  onFocus(event: FocusEvent) {
    if (this.idee && this.idee.name.includes('Toucher pour écrire')) {
      (event as any).target.select();
    }
  }

  getBorder(): string {
    if (this.idee && !this.idee.categorie) {
      return '1px solid #09357A';
    } else {
      return 'none';
    }
  }

  getBadgeColor(): string {
    if (this.idee && this.idee.categorie) {
      return this.idee ? this.idee.categorie.color : this.categorie.color;
    } else if (this.categorie) {
      return this.categorie.color;
    } else {
      return 'white';
    }
  }

  setIdeeToNewCategorie(categ: Categorie) {
    if (!categ || categ.id === 0) {
      this.ideesServiceService.putIdeeInCategorie(this.idee, undefined);
    } else {
      this.ideesServiceService.putIdeeInCategorie(this.idee, categ);
    }
  }

  count(): number {
    if (this.categorie) {
      return this.ideesServiceService.countIdeesByCategorie(this.categorie);
    }
    return 0;
  }

  fetchListOfIdees(): Idee[] {
    return this.ideesServiceService.fetchIdeesByCategorie(this.categorie);
  }

  openCloseListedIdees(): void {
    if (this.fetchListOfIdees().length === 0) {
      this.ideesListOpened = false;
    } else {
      this.ideesListOpened = !this.ideesListOpened;
    }
  }

  computeListArrow(): SafeStyle {
    if (this.ideesListOpened) {
      return this.sanitizer.bypassSecurityTrustStyle('center no-repeat url(./assets/icons/arrow_up.png)');
    } else {
      return this.sanitizer.bypassSecurityTrustStyle('center no-repeat url(./assets/icons/arrow_down.png)');
    }
  }

  getCategBorderStyle(categ: Categorie): SafeStyle {
    if (categ.borderColor) {
      return this.sanitizer.bypassSecurityTrustStyle(`1px solid ${categ.borderColor}`);
    } else {
      return undefined;
    }
  }

}
