import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, interval } from 'rxjs'; 

import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

export interface PostInfo {
  title: string;
  url: string;
  author: string;
  createdAt: Date;
}

@Injectable()
export class FetchPostsService {

  getAllPostsUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('fetchPostsService');
  }

  fetchPosts (): Observable<any> {
    return interval(10000).pipe(
      startWith(0),
      switchMap(() => this.http.get(this.getAllPostsUrl).pipe(
          catchError(this.handleError('fetchPosts', []))
        )
      ));
  } 

}