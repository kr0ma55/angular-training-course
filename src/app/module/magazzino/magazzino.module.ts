import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazzinoModuleRoutingModule } from './magazzino-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MagazzinoComponent } from './components/pagina-amici/home-magazzino.component';



@NgModule({
  declarations: [MagazzinoComponent],
  imports: [
    CommonModule,
    MagazzinoModuleRoutingModule,
    MatSlideToggleModule

  ]
})
export class MagazzinoModule { }
