import { Component } from '@angular/core';
import { MagazzinoService } from '../../shared/magazzino.service';
import { UserService } from '../../../../core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-magazzino',
  templateUrl: './home-magazzino.component.html',
  styleUrl: './home-magazzino.component.scss'
})
export class HomeMagazzinoComponent {

  constructor(private serviceU:UserService,
    private router: Router){
    /* this.serviceU.location = window.location.pathname; */
    console.log(this.serviceU._location);
  }
  goToInventario() {
    this.router.navigate(['/magazzino/inventario']);

}

}
