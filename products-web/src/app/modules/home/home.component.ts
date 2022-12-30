import { Component } from '@angular/core';
import { ISlide } from '~/app/interfaces/islide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides: ISlide[] = [
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', title: 'iPhone 9' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg', title: 'iPhone X' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', title: 'Samsung Universe 9' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', title: 'OPPOF19' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg', title: 'Huawei P30' },
  ];

}
