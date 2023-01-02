import { Component, Input, OnInit } from '@angular/core';
import { IProductQuickView } from '~/app/interfaces/iproduct-quickview';

@Component({
  selector: 'app-product-quickview',
  templateUrl: './product-quickview.component.html',
  styleUrls: ['./product-quickview.component.scss']
})
export class ProductQuickviewComponent implements OnInit {

  @Input() 
  product: IProductQuickView = {} as IProductQuickView;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}