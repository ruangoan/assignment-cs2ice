import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import { Tip } from '../tip';
@Component({
  selector: 'app-melbourne',
  templateUrl: './melbourne.component.html',
  styleUrls: ['./melbourne.component.css']
})
export class MelbourneComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  teams: Team[];
  games: Game[];
  nextgames: Game[];
  tips:Tip[];
  // showSpinner: boolean;
  ngOnInit() {
    this.getGames();
    this.getTips();
  }
  getGames(): void {
    // this.showSpinner = true;
    this.dataService.getGames("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe(temp => {this.games = temp
      .filter(
      (team: any) =>
        (team.complete == 100 && team.ateam ) =='Melbourne' ||
        (team.complete == 100 && team.hteam ) =='Melbourne'
    );})
      // .add(() => (this.showSpinner = false));
  }
  getTips(): void {
    this.dataService.getTips("https://api.squiggle.com.au/?q=tips;year=2019;source=1").subscribe(temp => {this.tips = temp
    .filter(
    (tip: any) =>
      (tip.round>'11' &&tip.ateam ) =='Melbourne' ||
      (tip.round>'11' &&tip.hteam ) =='Melbourne'
  );}); 
  }
}
