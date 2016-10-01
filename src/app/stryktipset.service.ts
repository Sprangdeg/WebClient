import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { stryktipsetCoupong } from './stryktipset/stryktipsetCoupong';

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

  getStryktipsetCoupong (): Observable<stryktipsetCoupong> {
    return this.http.get(this.stryktipsetCoupongUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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
