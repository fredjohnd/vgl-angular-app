import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { WebNormalizer } from './shared/normalizers/web.normalizer';
import { JsonServerNormalizer } from './shared/normalizers/json-server.normalizer';

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {provide: WebNormalizer, useClass: JsonServerNormalizer}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
