import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-theme-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  visited = false;
  insertBtn = 'insert_btn_notif';
  @Input() insertText: string = 'En route pour retrouver les autres groupes, vous recevez un message expliquant que le rendez-vous a changé.<br><br>Vous devez désormais les retrouver directement à l\'arrêt La Plaine Stade de France à 15h15.<br><br> Repérez les éléments qui vous permettent de trouver un nouvel itinéraire.';

  @ViewChild('insertBtnElm') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('enterScene')
  clickInside() {
    this.visited = true;
    this.insertBtn = 'insert_btn_opened';
  }

  @HostListener('exitScene')
  clickOutside(iv) {
    this.insertBtn = this.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
  }

}
