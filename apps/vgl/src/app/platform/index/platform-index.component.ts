import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'vgl-platform-index',
  templateUrl: './platform-index.component.html',
  styleUrls: ['./platform-index.component.scss'],
})

export class PlatformIndexComponent implements OnInit, OnDestroy {
  
  protected platformName = '';

  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroyed$),
      tap((params: Params) => this.loadPlatformData(params['platformId']))
    ).subscribe();
  }

  loadPlatformData(platform: string): void {
    this.platformName = platform;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
