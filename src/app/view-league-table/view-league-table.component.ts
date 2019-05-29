import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {Team} from '../team';
import { Router, Route } from "@angular/router";
import { Game } from '../game';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {
  selectedTeam: Team;

  teams:Team[];
  selectedGame: Game;

  games:Game[];

  
  constructor(private dataService: DataServiceService, private route: Router) { }
  ngOnInit() {
    this.getAFLTeams();
  }

  onSelectTeam(team: Team): void {
    this.selectedTeam = team;
    // this.route.navigate(["/teamchild"])
  }
  
  getAFLTeams(): void {
    this.dataService.getTeams('https://api.squiggle.com.au/?q=teams').subscribe(temp => { this.teams = temp;});
  }
  onSelectGame(game: Game):void{
    this.selectedGame = game;
  }
  // getGames(): void {
  //   this.showSpinner = true;
  //   this.dataService.getGames("https://api.squiggle.com.au/?q=games;year=2019")
  //   .subscribe(temp => {this.games = temp.filter(
  //     (team: any) =>
  //       (team.complete == 100 && team.ateam ) ||
  //       (team.complete == 100 && team.hteam )
  //   );})
  //     .add(() => (this.showSpinner = false));
  // }
  getGames(): void {
    this.dataService.getGames('https://api.squiggle.com.au/?q=games').subscribe(temp => { this.games = temp;});
  }
  myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
}