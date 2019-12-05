import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalUtilService } from 'src/app/@theme/modal-util/modal-util.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {

  constructor(private router: Router, private modalUtil: ModalUtilService) { }

  ngOnInit() {
  }

  goToIntro() {
    this.router.navigate(['intro']);
  }

  showCredits(): void {
    this.modalUtil.popin()
        .subscribe((e: string) => this.modalUtil.popout());

  }

}
