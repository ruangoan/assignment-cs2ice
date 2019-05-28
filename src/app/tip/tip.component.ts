import { Component, OnInit } from '@angular/core';
import { Tip } from '../tip';
import { TipData } from '../tipdata';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {
  tips:Tip[];
  constructor(private tipData: TipData) { }

  ngOnInit() {
    this.getTips();
  }
  getTips(): void {
    this.tipData.getTips().subscribe(temp => { this.tips = temp;}); 
  }
}
