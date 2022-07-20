import { Injectable } from '@angular/core';
import {
  Resolve,
  // RouterStateSnapshot,
  // ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PlatformFetcherService } from '../services/platforms-fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformsResolver implements Resolve<unknown[]> {

  constructor(private service: PlatformFetcherService) {}

  resolve(/*route: ActivatedRouteSnapshot, state: RouterStateSnapshot*/): Observable<unknown[]> {
    return this.service.getPlatforms();
  }
}
