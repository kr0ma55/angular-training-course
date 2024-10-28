import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../shared/post.model';


@Injectable({
  providedIn: 'root'
})
export class ServizioComuneService {

  constructor(private http: HttpClient) { }

  getMockFile(): Observable<Post> {

    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts');

  }
  
}
