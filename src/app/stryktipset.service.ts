import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Match } from './stryktipset/Match';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class StryktipsetService {
  private stryktipsetCoupongUrl = 'http://localhost:2021/api/Stryktipset';  // URL to web API
  constructor (private http: Http) {}

  getStryktipsetCoupong (): Observable<Match[]> {
    return this.http.get(this.stryktipsetCoupongUrl)
                    .map(this.toMatch)
                    .catch(this.handleError);
  }

  private toMatch(res:Response): Match[] {
    var resMatches =  res.json().matches;
    let matches: Match[] = [];

   var arr = Object.keys(resMatches).map(key => resMatches[key]);

   for (let mat of arr[0]) {
      matches.push(<Match>({
        Id : mat.Id,
        HomeTeam : mat.HomeTeam,
        AwayTeam : mat.AwayTeam,
        HomeWin : mat.HomeWin,
        AwayWin : mat.AwayWin,
        Draw : mat.Draw,
        HomeMark: false,
        DrawMark: false,
        AwayMark: false,
        }))
    }
    return matches;
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
