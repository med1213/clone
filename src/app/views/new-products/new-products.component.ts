import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  NewArrayList: any = [
    {
      name: 'Learn Angular Material',
      sale: 500,
      off: 250,
      img: '../../../assets/imgs/product11.jpg'
    },
    {
      name: 'Best Selling Products',
      sale: 2000,
      off: 150,
      img: '../../../assets/imgs/product11.jpg'
    },
    {
      name: 'Best Selling Products',
      sale: 2500,
      off: 1500,
      img: '../../../assets/imgs/product11.jpg'
    },
    {
      name: 'Learn Angular Material',
      sale: 500,
      off: 250,
      img: '../../../assets/imgs/product11.jpg'
    },
    {
      name: 'Best Selling Products',
      sale: 2000,
      off: 150,
      img: '../../../assets/imgs/product11.jpg'
    },
    {
      name: 'Learn Angular Material',
      sale: 500,
      off: 250,
      img: '../../../assets/imgs/product11.jpg'
    }
  ]
}
