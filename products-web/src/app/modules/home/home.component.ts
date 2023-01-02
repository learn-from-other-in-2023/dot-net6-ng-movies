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
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/6/thumbnail.jpg', title: 'MacBook Pro' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg', title: 'Tree Oil 30ml' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg', title: 'Elbow Macaroni - 400 gm' },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg', title: 'Gulab Powder 50 Gram' },
  ];

  featuredProducts: IProductQuickView[] = [
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/6/thumbnail.jpg', title: 'MacBook Pro', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg', title: 'Tree Oil 30ml', price: 20.23 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg', title: 'Elbow Macaroni - 400 gm', price: 47.45 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg', title: 'Gulab Powder 50 Gram', price: 67.33 },
  ]

  constructor() { }



}
