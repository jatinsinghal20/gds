import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  flagP = false;
  flagS = false;

  changeFirst($event) {
    this.flagP = !this.flagP;
  }

  changeSecond($event) {
    this.flagS = !this.flagS;
  }

}
