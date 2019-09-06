import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  
  private param:String;
  constructor(private http:HttpClient) { }

 GetValue()
 {
   return this.param;
 }
 SetValue(V:String)
 {
   this.param = V
   }
 
GetAllBooks(query:String){
  return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+query);
}
}