import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.model';
import { ServizioComuneService } from './core/servizio-comune.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'pippo-app';

  pippo: string = 'ciao ragazze' + 'ciao ragazzi'
  listaMock: Array<Post> = [];
  constructor(private service: ServizioComuneService) {

  }
  ngOnInit(): void {

    //test

    this.service.getMockFile() .subscribe(
      (response:any)=>{console.log(response)}
    );
  }

}


//costruire header, css (in app component)