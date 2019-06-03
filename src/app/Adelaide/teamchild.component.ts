import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import { Tip } from '../tip';

@Component({
  selector: 'app-teamchild',
  templateUrl: './teamchild.component.html',
  styleUrls: ['./teamchild.component.css']
})
export class AdelaideComponent implements OnInit {
//  games:Game[];
//  teams:Team[];
  constructor(private dataService: DataServiceService) { }
  teams: Team[];
  games: Game[];
  nextgames: Game[];
  tips : Tip[];
  // showSpinner: boolean;
  ngOnInit() {
    this.getGames();
    this.getAFLTeams();
    this.getNextGames();
    this.getTips();
  }
  getGames(): void {
    // this.showSpinner = true;
    this.dataService.getGames("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe(temp => {this.games = temp
      .filter(
      (team: any) =>
        (team.complete == 100 && team.ateam ) =='Adelaide' ||
        (team.complete == 100 && team.hteam ) =='Adelaide'
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
  getTips(): void {
    this.dataService.getTips("https://api.squiggle.com.au/?q=tips;year=2019;source=1").subscribe(temp => {this.tips = temp
    .filter(
    (tip: any) =>
      (tip.round>'11' &&tip.ateam ) =='Adelaide' ||
      (tip.round>'11' &&tip.hteam ) =='Adelaide'
  );}); 
  }
}
