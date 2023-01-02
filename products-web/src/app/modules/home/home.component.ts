import { Component } from '@angular/core';
import { IProductQuickView } from '~/app/interfaces/iproduct-quickview';
import { ISlide } from '~/app/interfaces/islide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides: ISlide[] = [
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', title: 'iPhone 9' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg', title: 'Tree Oil 30ml' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/21/thumbnail.png', title: 'Daal Masoor' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg', title: 'Elbow Macaroni' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg', title: 'Plant Hanger' },
  ];

  featuredProducts: IProductQuickView[] = [
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', title: 'iPhone 9', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg', title: 'Tree Oil 30ml', price: 20.23 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/21/thumbnail.png', title: 'Daal Masoor', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg', title: 'Elbow Macaroni', price: 47.45 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg', title: 'Plant Hanger', price: 67.33 },
  ]

  constructor() { }



}
