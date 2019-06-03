import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { DataServiceService } from '../data-service.service';
import { Team } from '../team';
import { Tip } from '../tip';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-upcominggame',
  templateUrl: './upcominggame.component.html',
  styleUrls: ['./upcominggame.component.css']
})
export class UpcominggameComponent implements OnInit {
tips: Tip[];
  constructor(private dataService: DataServiceService) { }
  
  ngOnInit() {
    this.getTips();
  }
  // prediction(Tip): void{
  //   for(let tips of Tip){
  //     if(tips.hteamid == 1 || tips.ateamid == 1)
  //     {
  //       if(tips.tipsteamid == 1)
  //       {
  //         this.tipsFavor.push({'confidence':tips.hconfidence, 'ateam': tips.ateam, 'hteam':tips.hteam})
  //       }
  //     }
  //   }
  // }
  getTips(): void {
    
    this.dataService.getTips("https://api.squiggle.com.au/?q=tips;year=2019;source=1").subscribe(temp => {this.tips = temp
    .filter(
    (tip: any) =>
      tip.round>'11');}); 
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
  // getPrediction():void{
  //   this.dataService.getTips().subscribe(temp => { this.prediction = (temp)});
  // }

  
