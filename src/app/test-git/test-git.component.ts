import { Component,  OnChanges, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-test-git',
  templateUrl: './test-git.component.html',
  styleUrls: ['./test-git.component.css']
})
export class TestGitComponent implements OnChanges {
@Input() game: Game;
  constructor() { }

  ngOnChanges() {
  }

}
