import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
@Component({
  selector: 'app-collingwood',
  templateUrl: './collingwood.component.html',
  styleUrls: ['./collingwood.component.css']
})
export class CollingwoodComponent implements OnInit {

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
        (team.complete == 100 && team.ateam ) =='Collingwood' ||
        (team.complete == 100 && team.hteam ) =='Collingwood'
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
