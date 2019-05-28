import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import{Tip} from './tip';

import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TipData {

  constructor(private http: HttpClient) { }

      getTips() : Observable<Tip[]> {
   
        return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;source=1').pipe(
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
}
