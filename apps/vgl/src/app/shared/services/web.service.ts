import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { WebNormalizer } from '../normalizers/web.normalizer';
import { WebSerializer } from '../serializers/web.serializer';

export interface WebParams {
  [param: string]: string;
}

@Injectable({
    providedIn: 'root'
})
export class WebService {


    constructor(
      private http: HttpClient,
      private webNormalizer: WebNormalizer,
      private webSerializer: WebSerializer
      ) {}

    get<T>(endpoint: string, params: WebParams = {}): Observable<T> {

      const httpParams = new HttpParams({fromObject: this._serializeParams({...params})});

        return this.http.get<T>(this._getUrl(endpoint), {
            headers: this._getHeaders(),
            params: httpParams,
            observe: 'response'
        }).pipe(
            map((response) => this._normalizeData<T>(response.body, params, response.headers)),
            catchError((err, caught) => this._catchError(err, caught))
        );
    }

    put<T>(endpoint: string, data?: any, params?: HttpParams | { [param: string]: string | string[] }): Observable<T> {
        // this.progress.startLoading();
        return this.http.put<T>(this._getUrl(endpoint), data, {
            headers: this._getHeaders(),
            params
        }).pipe(
            // tap(() => this.progress.stopLoading()),
            catchError((err, caught) => this._catchError(err, caught))
        );
    }

    post<T>(endpoint: string, data?: any, params?: HttpParams | { [param: string]: string | string[] }): Observable<T> {
        // this.progress.startLoading();
        return this.http.post<T>(this._getUrl(endpoint), data, {
            headers: this._getHeaders(),
            params
        }).pipe(
            // tap(() => this.progress.stopLoading()),
            catchError((err, caught) => this._catchError(err, caught))
        );
    }

    delete<T>(endpoint: string, params?: HttpParams | { [param: string]: string | string[] }): Observable<T> {
        // this.progress.startLoading();
        return this.http.delete<T>(this._getUrl(endpoint), {
            headers: this._getHeaders(),
            params
        }).pipe(
            // tap(() => this.progress.stopLoading()),
            catchError((err, caught) => this._catchError(err, caught))
        );
    }

    _getUrl(endpoint: string): string {
        return `${environment.API.HOST}${environment.API.NAMESPACE}${endpoint}`;
    }

    _getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${this.session.currentUser.authorization.access_token}`
        });
    }

    _normalizeData<T>(responseBody: unknown, params: WebParams, headers: HttpHeaders) : T {
      return this.webNormalizer.normalize(responseBody, params, headers);
    }

    _serializeParams(params?: WebParams) {
      return this.webSerializer.serializeParams(params);
    }

    _catchError(error: unknown, caught: unknown) {
        console.log(error, caught);
        return throwError(caught);
        // if (error.status === 401) {
        //     this.flashService.error(this.translations['GENERAL'].session_timeout_error, 10000);
        //     setTimeout(() => this.session.cleanLogin(), 10000);
        // }
        // this.progress.stopLoading();
    }

}
