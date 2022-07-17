import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IPlatform } from '../interfaces/platform.interface';
import { IPlatformFetcherService } from './platform-fetcher.service.interface';
import { WebService } from './web.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class PlatformFetcherService implements IPlatformFetcherService {


  constructor(private webService: WebService) {}

  /**
   * Fetches available platforms
   * @returns Array of IPlatform
   */
  getPlatforms(): Observable<IPlatform[]> {
      const endpoint = environment.API.PLATFORMS.ALL;
      return this.webService.get(endpoint);
  }

  /**
   * Fetches a single platform by Id
   * @returns Array of IPlatform
   */
  getPlatformById(id: string): Observable<IPlatform> {
      const endpoint = environment.API.PLATFORMS.SINGLE;
      return this.webService.get(endpoint, {id});
  }

  /**
   * Fetches a single platform by slug
   * @returns The IPlatform
   */
  getPlatformBySlug(slug: string): Observable<IPlatform> {
      const endpoint = environment.API.PLATFORMS.SINGLE;
      return this.webService.get<IPlatform[]>(endpoint, {slug}).pipe(
        map(results => results[0])
      )
  }


}
