import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'vgl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vgl';
  
  constructor(translate: TranslateService) {

    // Set ngx default and current language
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
