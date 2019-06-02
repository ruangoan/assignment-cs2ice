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
import { AdelaideComponent } from './Adelaide/teamchild.component';
import { LadderComponent } from './ladder/ladder.component';
import { UpcominggameComponent } from './upcominggame/upcominggame.component';
import { BrisbaneComponent } from './brisbane/brisbane.component';
import { CarltonComponent } from './carlton/carlton.component';
import { CollingwoodComponent } from './collingwood/collingwood.component';
import { EssendonComponent } from './essendon/essendon.component';
import { FremantleComponent } from './fremantle/fremantle.component';
import { GeelongComponent } from './geelong/geelong.component';
import { GoldCoastComponent } from './gold-coast/gold-coast.component';
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




@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    HomeComponent,
    ViewGameTableComponent,
    TipComponent,
    TeamComponent,
    AdelaideComponent,
    LadderComponent,
    UpcominggameComponent,
    BrisbaneComponent,
    CarltonComponent,
    CollingwoodComponent,
    EssendonComponent,
    FremantleComponent,
    GeelongComponent,
    GoldCoastComponent,
    GiantsComponent,
    HawthornComponent,
    MelbourneComponent,
    NorthMelbourneComponent,
    PortAdelaideComponent,
    RichmondComponent,
    StKildaComponent,
    SydneyComponent,
    WestCoastComponent,
    BulldogsComponent
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
