import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



const DATA_WII = [
  {name: 'Super Mario', slug: 'sm'},
  {name: 'Luigis Mansion', slug: 'lm'},
];

const DATA_PS2 = [
  {name: 'Gran Turismo 4', slug: 'gt4'},
  {name: 'GTA Vice City', slug: 'gta'},
]

@Injectable({
  providedIn: 'root'
})

export class PlatformService {

  /**
   * Fetches games for a specific platform
   * @param platform 
   * @returns Array of PlatformGamesResults
   */
  getItemsForPlatform(platform: string): Observable<{name: string; slug: string}[]> {
    if (platform === 'wii') return of(DATA_WII);
    if (platform === 'ps2') return of(DATA_PS2);
    return of(DATA_PS2);
  }
}
