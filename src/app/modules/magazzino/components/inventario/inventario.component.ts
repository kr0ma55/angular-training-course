import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/user.service';
import { Post } from '../../shared/post.model';
import { MagazzinoService } from '../../shared/magazzino.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent implements OnInit {
     listaOriginale!:Post[] ;
     listaPaginata:any[] = new Array<any>();
     
     constructor(private serviceU:MagazzinoService){
    }
     pager: any = {};

     ngOnInit(): void {
      this.serviceU.getPosts().subscribe((res)=> { 
       this.listaOriginale = res;
       this.listaPaginata = res.slice(0,10);
       
      /*  this.listaPaginata = ['a','b','c','d','e','f']; */
      })
   }

   changePage(event:any){
    this.listaPaginata = this.listaOriginale.slice(event.startIndex,event.endIndex);
   }

}
