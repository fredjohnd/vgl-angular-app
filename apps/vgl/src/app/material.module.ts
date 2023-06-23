import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

const matModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatCheckboxModule
]
@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
