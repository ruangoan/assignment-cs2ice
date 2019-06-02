import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import {Observable} from 'rxjs';
import { Game} from '../game';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnChanges {

  selectedTeam: Team;

  @Input() teams:Team[];
  OldGames: Game[]= [];

  
  
  constructor(private dataService: DataServiceService) { }
ngOnChanges(){
    this.getPastGames();
    this.getAFLTeams();
  }
  
  pastGames(games):void{
    for(let game of games){
      if(game.ateam == this.teams|| game.hteam == this.teams){
        {
          if(game.winner !=null)
          {
            this.OldGames.push(game);
          }
        }
      }
    }
  }
  getPastGames(): void{
    this.dataService.getGames("https://api.squiggle.com.au/?q=games;year=2019").subscribe(temp => {
      this.pastGames(temp);
    });
  }

   onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getAFLTeams(): void {
    this.dataService.getTeams("https://api.squiggle.com.au/?q=teams").subscribe(temp => { this.teams = temp;});
  }
}



