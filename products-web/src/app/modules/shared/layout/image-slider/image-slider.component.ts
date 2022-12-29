import { Component, Input } from '@angular/core';
import { ISlide } from '~/app/interfaces/islide.interface';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {

  @Input()
  slides: ISlide[] = [];

}
