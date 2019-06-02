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
    .subscribe(temp => {this.games = temp
      .filter(
      (team: any) =>
        (team.complete == 100 && team.ateam )  ||
        (team.complete == 100 && team.hteam ) 
    );})
      .add(() => (this.showSpinner = false));
  }
  getAFLTeams(): void {
    this.dataService.getTeams("https://api.squiggle.com.au/?q=teams").subscribe(temp => { this.teams = temp;});
  }
  myFunction1() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
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
  myFunction2() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
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
