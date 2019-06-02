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
tipsFavor: Tip[] = [];
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
    
    this.dataService.getTips().subscribe(temp => { this.tipsFavor = (temp)});
      
  }
  // getPrediction():void{
  //   this.dataService.getTips().subscribe(temp => { this.prediction = (temp)});
  // }
}
  
