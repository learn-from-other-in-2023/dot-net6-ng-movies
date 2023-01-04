import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from './layout/image-slider/image-slider.component';
import { MessageBandComponent } from './layout/message-band/message-band.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ImageSliderComponent
];

@NgModule({
  declarations: [
    ...components,
    ImageSliderComponent,
    MessageBandComponent
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    NgmaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
