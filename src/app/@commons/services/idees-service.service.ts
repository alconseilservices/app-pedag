import { Injectable } from '@angular/core';
import { Categorie, Idee, ListIdentifier } from '../models/murs-idees-domain';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeesServiceService {

  counter = 1;

  categoriesListSource: BehaviorSubject<Categorie[]>;
  categoriesListSource$: Observable<Categorie[]>;
  ideesListSource: BehaviorSubject<Idee[]>;
  ideesListSource$: Observable<Idee[]>;

  categoriesList: Categorie[] = [];
  ideesList: Idee[] = [];

  constructor() {
    this.categoriesListSource = new BehaviorSubject<Categorie[]>(this.categoriesList);
    this.categoriesListSource$ = this.categoriesListSource.asObservable();
    this.ideesListSource = new BehaviorSubject<Idee[]>(this.ideesList);
    this.ideesListSource$ = this.ideesListSource.asObservable();
  }

  getCategories(): Categorie[] {
    return this.categoriesList;
  }

  getIdeesList(): Idee[] {
    return this.ideesList;
  }

  newIdee(idee: Idee) {
    idee.id = new Date().getTime();
    idee.tags = [ListIdentifier.LIST1];
    this.ideesList.unshift(idee);
    this.notify();
  }

  newCategorie(categorie: Categorie) {
    categorie.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    categorie.id = new Date().getTime();
    this.categoriesList.unshift(categorie);
    this.notify();
  }

  removeIdee(id: number) {
    this.ideesList = this.ideesList.filter((value: Idee) => value.id !== id);
    this.notify();
  }

  removeCategorie(id: number) {
    this.ideesList.forEach((item: Idee) => {
      if (item.categorie && item.categorie.id === id) {
        item.categorie = undefined;
      }
      this.notify();
    });
    this.categoriesList = this.categoriesList.filter((value: Categorie) => value.id !== id);
    this.notify();
  }

  putIdeeInCategorie(idee: Idee, categorie: Categorie) {
    const aIdee = this.ideesList.find((ideeItem: Idee) => ideeItem.id === idee.id);
    aIdee.categorie = categorie;
    this.notify();
  }

  updateIdeesListTags(idee: Idee, inTag: ListIdentifier, outTag: ListIdentifier) {
    idee.tags = idee.tags.filter((t: ListIdentifier) => t !== inTag);
    idee.tags = idee.tags.filter((t: ListIdentifier) => t !== outTag);
    idee.tags.push(inTag);
  }

  resolveRealIndexByTagArray(idee: Idee, tags: ListIdentifier[]): number {
    for (const iterator of tags) {
      // tslint:disable-next-line: prefer-const
      let index = this.resolveRealIndexByTag(idee, iterator);
      if (index >= 0) {
        return index;
      }
    }
    return -1;
  }

  resolveRealIndexByTag(idee: Idee, tag: ListIdentifier): number {
    return this.ideesList.findIndex((item: Idee) => item.tags.includes(tag) && idee.id === item.id);
  }

  resolveRealIndexByVirtualIndexToArray(vindex: number, tags: ListIdentifier[]): number {
    const filtredList: Idee[] = [];
    for (const iterator of this.ideesList) {
      if (tags.includes(iterator.tags[0])) {
        filtredList.push(iterator);
      }
    }
    if ((vindex + 1) > filtredList.length) {
      return vindex;
    } else if (filtredList.length > 0) {
      const filtredIdee = filtredList[vindex];
      return this.ideesList.findIndex((item: Idee) => filtredIdee.id === item.id);
    } else {
      return 0;
    }
  }

  resolveRealIndexByVirtualIndex(vindex: number, tag: ListIdentifier): number {
    const filtredList = this.ideesList.filter((idee: Idee) => idee.tags.includes(tag));
    if ((vindex + 1) > filtredList.length) {
      return vindex;
    } else if (filtredList.length > 0) {
      const filtredIdee = filtredList[vindex];
      return this.ideesList.findIndex((item: Idee) => filtredIdee.id === item.id);
    } else {
      return 0;
    }
  }

  fetchIdeesByCategorie(categorie: Categorie): Idee[] {
    return this.ideesList.filter((idee: Idee) => idee.categorie && idee.categorie.id === categorie.id);
  }

  countIdeesByCategorie(categorie: Categorie): number {
    return this.ideesList.filter((idee: Idee) => idee.categorie && idee.categorie.id === categorie.id).length;
  }

  private notify() {
    this.ideesListSource.next(this.ideesList);
    this.categoriesListSource.next(this.categoriesList);
  }
}
