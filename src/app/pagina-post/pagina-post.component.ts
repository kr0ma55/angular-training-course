import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { ServizioComuneService } from '../core/servizio-comune.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ModaleComponent } from '../modale/modale.component';

@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrl: './pagina-post.component.scss'
})
export class PaginaPostComponent implements OnInit {
 listaPost: Array<Post> = [];
 isModalOpen = false;
 newPost= FormData;

 constructor(private service: ServizioComuneService,private dialog: MatDialog) {

 }

 ngOnInit(): void {
  this.service.getPosts().subscribe(
    (response:any)=>{this.listaPost=response}
  );
}

openModal() {
 
  this.dialog.open(ModaleComponent);
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



