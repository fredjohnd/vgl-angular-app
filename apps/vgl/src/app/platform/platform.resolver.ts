import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of(route.params['platformId']);
  }
}
