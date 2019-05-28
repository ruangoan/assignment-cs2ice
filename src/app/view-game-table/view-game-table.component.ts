import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
// import { GameData } from '../gamedata';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';

@Component({
  selector: 'app-view-game-table',
  templateUrl: './view-game-table.component.html',
  styleUrls: ['./view-game-table.component.css']
})
export class ViewGameTableComponent implements OnInit {
 games:Game[];
 teams:Team[];
  constructor(private dataService: DataServiceService) { }
 
  ngOnInit() {
    this.getGames();
    this.getAFLTeams();
  }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
  }
  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
}
