import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrl: './benvenuto.component.scss'
})
export class BenvenutoComponent implements OnInit {
  lista:any= [];
  listaSize!:number;
  showPaginator: boolean = false;
  constructor(private serviceU:UserService){
    console.log(this.serviceU._location);
  }
  ngOnInit(): void {
     this.serviceU.testMock().subscribe((res)=> { 
      this.lista = res;
      
     })
  }
}
