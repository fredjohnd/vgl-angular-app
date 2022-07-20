import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vgl-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGalleryComponent   {

  /**
   * Array containing the urls of the images to display
   */
  @Input() imagesSrcUrls: Array<string> = [];
}
