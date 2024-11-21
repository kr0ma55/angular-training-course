import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  _location!: string;

  constructor(private http:HttpClient) {
    
    this._location = window.location.pathname;
  }

  getLocation(){
    return this._location;
  }
  /* set location(value: string) {
    this._location = value;
  }
  get location(){
    return  this._location;
  } */
 testMock(){
  return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
 }
}
