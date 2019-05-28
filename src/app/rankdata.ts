import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Rank } from './rank';
@Injectable({
    providedIn: 'root'
  })   
export class Rankdata {
    constructor(private http: HttpClient) { }
    getRank(): Observable<Rank[]> {
        return this.http.get('https://api.squiggle.com.au/?q=ladder').pipe(
            map((data: any) => data.ladder.map((item: any) => new Rank(
                item.rank,
                item.round,
                item.source,
                item.teamid,
                item.wins,
                item.team,
                item.year,
                item.swarms,
                item.sourceid,
                item.percentage,
                item.updated,
                item.mean_rank
            )))
        );
    }
}
