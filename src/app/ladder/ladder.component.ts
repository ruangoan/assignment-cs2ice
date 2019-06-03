import { Component, OnInit } from '@angular/core';
import { Rank } from '../rank';
import { Rankdata } from '../rankdata';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  ranks: Rank[];
  constructor(private rankdata: Rankdata) { }

  ngOnInit() {
    this.getRank();
  }
  getRank(): void {
    this.rankdata.getRank("https://api.squiggle.com.au/?q=ladder;year=2019;round=11;sourceid=7").subscribe(temp =>{ this.ranks = temp;});
  }
      // sortRank(rank){
      //   For(let ranks of rank){
      //     if ranks.rank 
      //   }
      // }
} 
