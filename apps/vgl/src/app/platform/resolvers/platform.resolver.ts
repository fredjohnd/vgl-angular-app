import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IPlatform } from '../../shared/interfaces/platform.interface';
import { PlatformFetcherService } from '../../shared/services/platforms-fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformResolver implements Resolve<Observable<IPlatform>> {

  constructor(private platformFetcher: PlatformFetcherService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPlatform> {
    return this.platformFetcher.getPlatformBySlug(route.params['slug']);
  }
}
