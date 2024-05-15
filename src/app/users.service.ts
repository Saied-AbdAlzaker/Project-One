import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Service => Shared Data Or Logic 
export class UsersService {
  users:Array<User>=[
    {name:'saed',age:30,salary:5000,id:1},
    {name:'mohamed',age:23,salary:7000},
    {name:'hager',age:45,salary:3000,sayHello(){return 'Ahmed'}},
    {name:'Ali',age:33,salary:5655},
  ]

  sayHello(){
    alert('Hello From User Service')
  }
  constructor() { }
}
