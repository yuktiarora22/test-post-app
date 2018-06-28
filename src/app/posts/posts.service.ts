import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, timer } from 'rxjs';
import { concatMap, map, startWith, take } from 'rxjs/operators';
import { Constants } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  // method: gets posts after every 'n' seconds (first call is immediate)
  getPosts(counter): Observable<any> {
    const url = Constants.URLs.getPosts; // API endpoint
    return interval(counter * 1000).pipe(
      startWith(0),
      concatMap(() => this.http.get(url)),
      map(data => data)
    );
  }

  // method: shows timer after which next call will be made
  getCounter(counter): Observable<number> {
    return timer(0, 1000).pipe(
      take(counter),
      map(() => --counter)
    );
  }
}
