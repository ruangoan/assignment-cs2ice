import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { ViewGameTableComponent } from './view-game-table/view-game-table.component';
import { TipComponent } from './tip/tip.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { LadderComponent } from './ladder/ladder.component';
const routes: Routes = [
  {path: 'teams', component: ViewLeagueTableComponent},
  {path: 'games', component: ViewGameTableComponent},
  {path: 'tips', component: TipComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teamselect', component: TeamComponent},
  {path: 'ladder', component: LadderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
