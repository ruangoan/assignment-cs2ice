import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
@Component({
  selector: 'app-north-melbourne',
  templateUrl: './north-melbourne.component.html',
  styleUrls: ['./north-melbourne.component.css']
})
export class NorthMelbourneComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  teams: Team[];
  games: Game[];
  nextgames: Game[];
  // showSpinner: boolean;
  ngOnInit() {
    this.getGames();
    this.getAFLTeams();
    this.getNextGames();
  }
  getGames(): void {
    // this.showSpinner = true;
    this.dataService.getGames("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe(temp => {this.games = temp
      .filter(
      (team: any) =>
        (team.complete == 100 && team.ateam ) =='North Melbourne' ||
        (team.complete == 100 && team.hteam ) =='North Melbourne'
    );})
      // .add(() => (this.showSpinner = false));
  }
  getAFLTeams(): void {
    this.dataService.getTeams("https://api.squiggle.com.au/?q=teams").subscribe(temp => { this.teams = temp;});
  }
  getNextGames(): void {
    // this.showSpinner = true;
    this.dataService.getNextGames("https://api.squiggle.com.au/?q=games;year=2019;complete=0")
    .subscribe(temp => {this.nextgames = temp
      .filter(
      (team: any) =>
        (team.ateam ) =='Adelaide' ||
        (team.hteam ) =='Adelaide'
    );})
      // .add(() => (this.showSpinner = false));
  }
}