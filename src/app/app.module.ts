import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { DataServiceService } from './data-service.service';
import { HomeComponent } from './home/home.component';
import { ViewGameTableComponent } from './view-game-table/view-game-table.component';
import { TipComponent } from './tip/tip.component';
import { TeamComponent } from './team/team.component';
import { TeamchildComponent } from './teamchild/teamchild.component';
import { LadderComponent } from './ladder/ladder.component';
import { TestGitComponent } from './test-git/test-git.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    HomeComponent,
    ViewGameTableComponent,
    TipComponent,
    TeamComponent,
    TeamchildComponent,
    LadderComponent,
    TestGitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
