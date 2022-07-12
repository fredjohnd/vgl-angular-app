import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const DATA_PLATFORMS = [
    {
      name: 'WII',
      slug: 'wii'
    },
    {
      name: 'PS2',
      slug: 'ps2'
    }
  ];

  
@Injectable({
    providedIn: 'root'
  })
  
export class PlatformsFetcherService {

  /**
   * Fetches available platforms
   * @returns Array of IPlatformListResults
   */
    getPlatforms() {
      return of(DATA_PLATFORMS);
    }
}