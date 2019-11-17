import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToIntro() {
    this.router.navigate(['intro']);
  }

}
