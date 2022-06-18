import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const matModules = [
    MatIconModule,
    MatButtonModule
]
@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
