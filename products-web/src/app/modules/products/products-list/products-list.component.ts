import { Component } from '@angular/core';
import { IProductQuickView } from '~/app/interfaces/iproduct-quickview';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  allProducts: IProductQuickView[] = [
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', title: 'iPhone 9', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg', title: 'Tree Oil 30ml', price: 20.23 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg', title: 'Daal Masoor', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg', title: 'Elbow Macaroni', price: 47.45 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg', title: 'Plant Hanger', price: 67.33 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/27/thumbnail.png', title: 'iPhone 9', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg', title: 'Tree Oil 30ml', price: 20.23 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/21/thumbnail.png', title: 'Daal Masoor', price: 10.98 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg', title: 'Elbow Macaroni', price: 47.45 },
    { thumbnailUrl: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg', title: 'Plant Hanger', price: 67.33 },
  ]
  
}
