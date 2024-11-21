import { Component } from '@angular/core';
import { MagazzinoService } from '../../shared/magazzino.service';
import { UserService } from '../../../../core/user.service';

@Component({
  selector: 'app-home-magazzino',
  templateUrl: './home-magazzino.component.html',
  styleUrl: './home-magazzino.component.scss'
})
export class HomeMagazzinoComponent {

  constructor(private serviceU:UserService){
    /* this.serviceU.location = window.location.pathname; */
    console.log(this.serviceU._location);
  }
}
