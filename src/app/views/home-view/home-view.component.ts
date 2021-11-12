import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  CatArrayList: any = [
    {
      id: 1,
      name: 'mobile',
      amounts: '250',
      img: '../../../assets/imgs/category1.jpg'
    },
    {
      id: 2,
      name: 'notebook',
      amounts: '125',
      img: '../../../assets/imgs/category2.jpg'
    },
    {
      id: 1,
      name: 'mobile',
      amounts: '250',
      img: '../../../assets/imgs/category1.jpg'
    },
    {
      id: 2,
      name: 'notebook',
      amounts: '125',
      img: '../../../assets/imgs/category2.jpg'
    },
    {
      id: 1,
      name: 'mobile',
      amounts: '250',
      img: '../../../assets/imgs/category1.jpg'
    },
    {
      id: 2,
      name: 'notebook',
      amounts: '125',
      img: '../../../assets/imgs/category2.jpg'
    },

  ]

}
