import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loopSlider();
  }
  selectedIndex = 0;

  SliderArrays: any = [
    {
      image: '../../../assets/imgs/slider7.jpg'
    },
    {
      image: '../../../assets/imgs/slider6.jpg'
    },
    {
      image: '../../../assets/imgs/slider8.jpg'
    },
    {
      image: '../../../assets/imgs/slider5.jpg'
    }
  ]

  @ViewChild('slide') slide: any;
  j = this.SliderArrays.length - 1;
  i = 0;

  prev() {
    if (this.j != this.SliderArrays.length - 1) {
      this.j++
      this.i = this.i + 450;
      this.slide.nativeElement.style.top = this.i + "px";
    }
  }

  next() {
    if (this.j != 0) {
      this.j--
      this.i = this.i - 450;
      this.slide.nativeElement.style.top = this.i + "px";
    }
  }

  loopSlider() {
    const loop = interval(3000).subscribe(() => { this.autoSlider() });
    
  }

  autoSlider() {
    if (this.j != 0) {
      this.j--
      this.i = this.i - 450;
      this.slide.nativeElement.style.top = this.i + "px";
    }
    else{
      if (this.j != this.SliderArrays.length - 1) {
        this.j++
        this.i = this.i + 450;
        this.slide.nativeElement.style.top = this.i + "px";
      }
    }
  }



}
