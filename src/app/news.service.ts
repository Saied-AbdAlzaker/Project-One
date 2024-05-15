import { Injectable } from '@angular/core';
//2-
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  //3-
  // Access Modifiers (private,public,protected)
  constructor(private http:HttpClient) {
   }

   getNews():Observable<any>
   {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=926dbb24dc1144739fb517b23514acd5');
   }
}
