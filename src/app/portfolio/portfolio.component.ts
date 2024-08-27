import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  flag: boolean = true;
  modelImg: string = '';

  imgSrc: string[] = [
    'assets/images/cabin.png',
    'assets/images/cake.png',
    'assets/images/circus.png',
    'assets/images/game.png',
    'assets/images/safe.png',
    'assets/images/circus.png'
  ]

  hideModel(element: EventTarget | null, img: HTMLImageElement): void {
    if (element == img) return;
    this.flag = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
