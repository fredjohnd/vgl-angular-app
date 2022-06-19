import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of, Subject, takeUntil } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { PlatformService } from '../shared/platform.service';

@Component({
  selector: 'vgl-platform-index',
  templateUrl: './platform-index.component.html',
  styleUrls: ['./platform-index.component.scss'],
})

export class PlatformIndexComponent implements OnInit, OnDestroy {

  protected platformName = '';

  private destroyed$ = new Subject<void>();
  
  items: Array<{name: string, slug: string}> = [];
  nameIndexes$ = of(['A', 'F', 'H', 'M', 'N', 'R', 'S', 'T']);

  constructor(private route: ActivatedRoute, private service: PlatformService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroyed$),
      tap((params: Params) => this.loadPlatformData(params['platformId']))
    ).subscribe();
  }

  loadPlatformData(platform: string): void {
    this.platformName = platform;
    this.service.getItemsForPlatform(platform).pipe(
      take(1),
      tap(data => this.items = data)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
