import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class MagazzinoService {

  constructor(private http:HttpClient) {
    console.log('MagazzinoService');
  }

  getPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
   }
}
