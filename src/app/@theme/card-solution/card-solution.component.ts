import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Solution } from 'src/app/@commons/models/step-propsolutions';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AssetService } from 'src/app/@commons/util/asset.service';

@Component({
  selector: 'app-theme-card-solution',
  templateUrl: './card-solution.component.html',
  styleUrls: ['./card-solution.component.css']
})
export class CardSolutionComponent implements OnInit {

  @Input() activSolution: Solution;
  @Input() index: number;
  @Input() missionId: string;
  @Output() solutionSelected: EventEmitter<number> = new EventEmitter();

  constructor(private sanitize: DomSanitizer, public asset: AssetService) { }

  ngOnInit() {
  }

  background(): SafeStyle {
    return this.sanitize.bypassSecurityTrustStyle(
      `${this.activSolution.bgX} ${this.activSolution.bgY} ` +
      `no-repeat url(${this.asset.resolveLocation('./assets/images/', this.missionId, this.activSolution.bg)})` +
      `,rgba(253, 255, 254, 0.3)`
    );
  }

  solutionSelectedHandler(index: number) {
    this.solutionSelected.emit(index);
  }

}
