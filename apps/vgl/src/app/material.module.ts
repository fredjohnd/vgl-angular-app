import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const matModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule
]
@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
