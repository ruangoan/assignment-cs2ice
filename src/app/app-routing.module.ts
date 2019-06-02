import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { ViewGameTableComponent } from './view-game-table/view-game-table.component';
import { TipComponent } from './tip/tip.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { LadderComponent } from './ladder/ladder.component';
import { UpcominggameComponent } from './upcominggame/upcominggame.component';
import { AdelaideComponent } from './Adelaide/teamchild.component';
import { BrisbaneComponent } from './brisbane/brisbane.component';
import { CarltonComponent } from './carlton/carlton.component';
import { CollingwoodComponent } from './collingwood/collingwood.component';
import { EssendonComponent } from './essendon/essendon.component';
import { FremantleComponent } from './fremantle/fremantle.component';
import { GeelongComponent } from './geelong/geelong.component';
import { GiantsComponent } from './giants/giants.component';
import { HawthornComponent } from './hawthorn/hawthorn.component';
import { MelbourneComponent } from './melbourne/melbourne.component';
import { NorthMelbourneComponent } from './north-melbourne/north-melbourne.component';
import { PortAdelaideComponent } from './port-adelaide/port-adelaide.component';
import { RichmondComponent } from './richmond/richmond.component';
import { StKildaComponent } from './st-kilda/st-kilda.component';
import { SydneyComponent } from './sydney/sydney.component';
import { WestCoastComponent } from './west-coast/west-coast.component';
import { BulldogsComponent } from './bulldogs/bulldogs.component';
import { GoldCoastComponent } from './gold-coast/gold-coast.component';
const routes: Routes = [
  {path: 'teams', component: ViewLeagueTableComponent},
  {path: 'games', component: ViewGameTableComponent},
  {path: 'tips', component: TipComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teamselect', component: TeamComponent},
  {path: 'ladder', component: LadderComponent},
  {path: 'UpcomingGame', component:UpcominggameComponent},
  {path: 'Adelaide', component:AdelaideComponent},
  {path: 'Brisbane', component: BrisbaneComponent},
  {path: 'Carlton', component:CarltonComponent},
  {path: 'Collingwood', component: CollingwoodComponent},
  {path: 'Essendon', component: EssendonComponent},
  {path:'Fremantle', component: FremantleComponent},
  {path:'Geelong', component: GeelongComponent},
  {path: 'Giants', component: GiantsComponent},
  {path: 'GoldCoast', component: GoldCoastComponent},
  {path:'Hawthorn', component: HawthornComponent},
  {path: 'Melbourne', component: MelbourneComponent},
  {path:'NorthMelbourne', component: NorthMelbourneComponent},
  {path: 'PortAdelaide', component: PortAdelaideComponent},
  {path: 'Richmond', component: RichmondComponent},
  {path: 'StKilda', component: StKildaComponent},
  {path: 'Sydney', component: SydneyComponent},
  {path: 'WestCoast', component: WestCoastComponent},
  {path: 'Bulldogs', component: BulldogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
