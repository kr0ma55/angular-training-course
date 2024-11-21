import { NgModule } from '@angular/core';
import { HomeMagazzinoComponent } from './components/home-magazzino/home-magazzino.component';
import { MagazzinoModuleRoutingModule } from './magazzino-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ButtonComponent } from '../../shared/button/button.component';
import { InventarioComponent } from './components/inventario/inventario.component';





@NgModule({
  declarations: [
    HomeMagazzinoComponent,
    ButtonComponent,
    InventarioComponent
  ],
  imports: [
    SharedModule ,
    MagazzinoModuleRoutingModule,
    
  ],
  providers:[
    /* UserService */
  ]
})
export class MagazzinoModule { }
