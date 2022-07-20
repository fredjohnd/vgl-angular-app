import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [ImageGalleryComponent],
  exports: [ImageGalleryComponent],
})
export class VglImageGalleryModule {}
