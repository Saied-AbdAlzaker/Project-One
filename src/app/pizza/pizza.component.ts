import { ApiService } from './../api.service';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit , OnDestroy {

  constructor(private _ApiService:ApiService) { }
  subEnd:Subscription = new Subscription()
  pizzaArr:any[] = [];
  err:string=''
  ngOnInit(): void {
    this.subEnd = this._ApiService.getPizza().subscribe({
      next:(data)=>{this.pizzaArr = data.recipes},
      error:(err)=>{this.err=err.message},
      complete:()=>{console.log('complete');
      }
    })
  }

  ngOnDestroy(): void {
    this.subEnd.unsubscribe()
    console.log('end');
  }
}

