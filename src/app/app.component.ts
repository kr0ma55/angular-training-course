import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.model';
import { ServizioComuneService } from './core/servizio-comune.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 listaMock: Array<Post> = [];

  constructor(private service: ServizioComuneService) {
  }

  ngOnInit(): void {

  
  }


}


