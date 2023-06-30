import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformFetcherService } from './shared/services/platforms-fetcher.service';
import { Observable } from 'rxjs';
import { IPlatform } from './shared/interfaces/platform.interface';

@Component({
  selector: 'vgl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vgl';

  protected platforms$: Observable<IPlatform[]>;

  constructor(private platformFetcher: PlatformFetcherService, translate: TranslateService) {

    translate.setDefaultLang('en');
    translate.use('en');

    this.platforms$ = this.platformFetcher.getPlatforms();
  }

}
