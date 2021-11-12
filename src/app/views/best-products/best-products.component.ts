import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.scss']
})
export class BestProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  BestArrayList: any = [
    {
      name: 'It is a long established fact that a reader will be distracte',
      sale: 500,
      off: 250,
      img: '../../../assets/imgs/product14.jpg'
    },
    {
      name: 'The point of using Lorem Ipsum is that it has a more-or-less norma',
      sale: 2000,
      off: 150,
      img: '../../../assets/imgs/product14.jpg'
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 2500,
      off: 1500,
      img: '../../../assets/imgs/product14.jpg'
    },
    {
      name: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
      sale: 500,
      off: 250,
      img: '../../../assets/imgs/product14.jpg'
    },
    {
      name: 'There are many variations of passages of Lorem Ipsum available',
      sale: 2000,
      off: 150,
      img: '../../../assets/imgs/product14.jpg'
    },
    {
      name: 'There is no one who loves pain itself, who seeks after it and wants to have it',
      sale: 500,
      off: 250,
      img: '../../../assets/imgs/product14.jpg'
    }
  ]

}
