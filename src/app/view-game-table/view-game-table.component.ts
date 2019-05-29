import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';

@Component({
  selector: 'app-view-game-table',
  templateUrl: './view-game-table.component.html',
  styleUrls: ['./view-game-table.component.css']
})
export class ViewGameTableComponent implements OnInit {
//  games:Game[];
//  teams:Team[];
  constructor(private dataService: DataServiceService) { }
  teams: Team[];
  games: Game[];
  showSpinner: boolean;
  ngOnInit() {
    this.getGames();
    this.getAFLTeams();
  }
  getGames(): void {
    this.showSpinner = true;
    this.dataService.getGames("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe(temp => {this.games = temp.filter(
      (team: any) =>
        (team.complete == 100 && team.ateam ) ||
        (team.complete == 100 && team.hteam )
    );})
      .add(() => (this.showSpinner = false));
  }
  getAFLTeams(): void {
    this.dataService.getTeams("https://api.squiggle.com.au/?q=teams").subscribe(temp => { this.teams = temp;});
  }
}
