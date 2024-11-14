import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazzinoModuleRoutingModule } from './magazzino-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MagazzinoComponent } from './components/pagina-amici/home-magazzino.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [MagazzinoComponent],
  imports: [
    CommonModule,
    MagazzinoModuleRoutingModule,
    SharedModule
  

  ]
})
export class MagazzinoModule { }
