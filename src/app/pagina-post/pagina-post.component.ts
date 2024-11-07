import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { ServizioComuneService } from '../core/servizio-comune.service';
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
 isModalOpen = false;
 newPost= FormData;

 constructor(private service: ServizioComuneService) {

 }

 ngOnInit(): void {
  this.service.getPosts().subscribe(
    (response:any)=>{this.listaPost=response}
  );
}

openModal() {
  this.isModalOpen = true;
}
closeModal() {
  this.isModalOpen = false;
}

onFormSubmitted(newPost:Post) {
  this.service.addPost(newPost).subscribe(
    (response: any) => {
      this.service.getPosts().subscribe(
        (res: any) => { this.listaPost = res }
      );
    }
    );
    // alert ("lista aggionata");
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



