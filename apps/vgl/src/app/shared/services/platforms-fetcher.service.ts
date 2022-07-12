import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { IPlatform } from '../interfaces/platform.interface';
import { IPlatformsFetcherService } from './platforms-fetcher.service.interface';
import { WebService } from './web.service';
  
@Injectable({
    providedIn: 'root'
  })
  
export class PlatformsFetcherService implements IPlatformsFetcherService {

  private endpoint = environment.API.PLATFORMS.FETCH;

  constructor(private webService: WebService) {}

  /**
   * Fetches available platforms
   * @returns Array of IPlatform
   */
    getPlatforms(): Observable<IPlatform[]> {
      return this.webService.get(this.endpoint);
    }
}