import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IGame } from '../../shared/interfaces/game.interface';
import { IPaginatedResults } from '../../shared/interfaces/paginated-results.interface';
import { IPlatform } from '../../shared/interfaces/platform.interface';
import { GameFetcherService } from '../../shared/services/game-fetcher.service';
import { PlatformFetcherService } from '../../shared/services/platforms-fetcher.service';

@Component({
  selector: 'vgl-platform-index',
  templateUrl: './platform-index.component.html',
  styleUrls: ['./platform-index.component.scss'],
})

export class PlatformIndexComponent implements OnInit, OnDestroy {

  protected platform$: Observable<IPlatform>;
  protected platformItems$: Observable<IPaginatedResults<IGame>>;
  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private platformFetcher: PlatformFetcherService, private gameFetcher: GameFetcherService ) { }

  ngOnInit(): void {
    this.platform$ = this.route.data.pipe(
      map((data: Data) => data['platform']),
      tap((platform) => this.fetchAdditionalDataForPlatform(platform)),
      takeUntil(this.destroyed$),
    );
  }

  fetchPlatform(slug: string): Observable<IPlatform> {
    return this.platformFetcher.getPlatformBySlug(slug);
  }

  fetchAdditionalDataForPlatform(platformId: string) {
    
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
