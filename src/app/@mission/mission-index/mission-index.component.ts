import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';

@Component({
  selector: 'app-mission-index',
  templateUrl: './mission-index.component.html',
  styleUrls: ['./mission-index.component.css']
})
export class MissionIndexComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: MissionsService) { }

  ngOnInit() {

  }

}
