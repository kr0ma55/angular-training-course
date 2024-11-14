import { Component, OnInit } from '@angular/core';
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
import { Post } from '../../../../shared/post.model';
import { ServizioComuneService } from '../../../../core/servizio-comune.service';


@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrl: './pagina-post.component.scss'
})
export class PaginaPostComponent implements OnInit {
 listaPost: Array<Post> = [];
 isModalOpen = false;
 newPost= FormData;

 valoreDiRitornoOpenRef: MatDialogRef<ModaleComponent> | undefined;
 constructor(private service: ServizioComuneService,private dialog: MatDialog) {

 }

 ngOnInit(): void {
  this.service.getPosts().subscribe(
    (response:any)=>{this.listaPost=response}
  );
 
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


onPostUpdated($event: Post){
  this.valoreDiRitornoOpenRef = this.dialog.open(ModaleComponent,{
    data: { ...$event },
  });
  this.valoreDiRitornoOpenRef?.afterClosed().subscribe( valDiRitorno => {console.log(valDiRitorno)})
}

 }



