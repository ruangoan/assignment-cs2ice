import { Component, OnChanges , Input} from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-teamchild',
  templateUrl: './teamchild.component.html',
  styleUrls: ['./teamchild.component.css']
})
export class TeamchildComponent implements OnChanges {
  @Input() team: Team;
  constructor() { }

  ngOnChanges() {
  }

}
