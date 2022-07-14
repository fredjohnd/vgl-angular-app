import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlatform } from '../../shared/interfaces/platform.interface';
import { PlatformFetcherService } from '../../shared/services/platforms-fetcher.service';

@Component({
  selector: 'vgl-platform-index',
  templateUrl: './platform-index.component.html',
  styleUrls: ['./platform-index.component.scss'],
})

export class PlatformIndexComponent implements OnInit, OnDestroy {

  protected platformName = '';

  private destroyed$ = new Subject<void>();
  
  items: Array<{name: string, slug: string}> = [];

  platform$: Observable<IPlatform>;

  constructor(private route: ActivatedRoute, private service: PlatformFetcherService) { }

  ngOnInit(): void {
    this.platform$ = this.route.data.pipe(
      map((data: Data) => data['platform']),
      takeUntil(this.destroyed$),
    );
  }

  fetchPlatform(slug: string): Observable<IPlatform> {
    return this.service.getPlatformBySlug(slug);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
