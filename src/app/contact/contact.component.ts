import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title:string='contact me';
  customColorFromContact:string='#2c3e50'
  
  constructor() { }

  ngOnInit(): void {
  }

}
