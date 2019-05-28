import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  selectedTeam: Team;

  teams:Team[];

  
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
  }

   onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
}



