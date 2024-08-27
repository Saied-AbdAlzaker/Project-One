import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string='start angular';
  customColorFromHome:string='white';

  constructor() { }

  ngOnInit(): void {
  }

  imgSrc:string = '../../assets/images/avataaars.svg'
  altImg:string = 'avataaars'
  widthImg:number = 250

}
