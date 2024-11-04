import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { ServizioComuneService } from '../core/servizio-comune.service';

@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrl: './pagina-post.component.scss'
})
export class PaginaPostComponent implements OnInit {

  listaPost: Array<Post> = [];
  constructor(private service: ServizioComuneService) {
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (response: any) => { this.listaPost = response }
    );
  }



  onPostDeleted(inputUtente: Post) {
    this.service.deletePost(inputUtente.id).subscribe(
      (response: any) => {
        this.service.getPosts().subscribe(
          (response: any) => { this.listaPost = response }
        );
      }
    );
  }




}
