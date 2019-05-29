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
    this.rankdata.getRank().subscribe(temp => { this.ranks = temp;});
  }

  sortTable(){
    console.log("fired");
    var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  }
  
} 
