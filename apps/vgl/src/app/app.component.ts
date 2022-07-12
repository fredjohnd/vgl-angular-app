import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { PlatformsFetcherService } from './shared/services/platforms-fetcher.service';

@Component({
  selector: 'vgl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vgl';

  protected platforms$: Observable<any[]> = this.platformFetcher.getPlatforms();

  constructor(
    private route: ActivatedRoute,
    private platformFetcher: PlatformsFetcherService,
    private translate: TranslateService

  ) {

    // Set ngx default and current language
    translate.setDefaultLang('en');
    translate.use('en');
  }

  // ngOnInit() {
  //   // this.platforms$ = this.platformFetcher.getPlatforms();
  // }

}
