import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Team} from './team';
import {Game} from './game';
import{Tip} from './tip';

import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getTeams(teamURL: string) : Observable<Team[]> {
   
    return this.http.get(teamURL).pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      )))
    );
      }

      getTips(gameURL: string) : Observable<Tip[]> {
   
        return this.http.get(gameURL).pipe(
          map((data: any) => data.tips.map((item: any) => new Tip(
            item.confidence,
            item.bits,
            item.gameid,
            item.ateamid,
            item.venue,
            item.year,
            item.correct,
            item.date,
            item.updated,
            item.hteam,
            item.tipteamid,
            item.margin,
            item.err,
            item.tip,
            item.ateam,
            item.source,
            item.sourceid,
            item.hconfidence,
            item.hteamid,
            item.round
          )))
        );
          }

    getGames(gameURL: string) : Observable<Game[]> {
   
      return this.http.get(gameURL).pipe(
        map((data: any) => data.games.map((item: any) => new Game(
          item.complete,
          item.is_grand_final,
          item.tz,
          item.hbehinds,
          item.ateam,
          item.winnerteamid,
          item.hgoals,
          item.updated,
          item.round,
          item.is_final,
          item.hscore,
          item.abehinds,
          item.winner,
          item.ascore,
          item.hteam,
          item.ateamid,
          item.venue,
          item.hteamid,
          item.agoals,
          item.year,
          item.date,
          item.id
        )))
      ); 
  }

  getNextGames(gameURL: string) : Observable<Game[]> {
   
    return this.http.get(gameURL).pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    ); 
}
}
