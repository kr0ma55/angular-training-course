import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMagazzinoComponent } from './components/home-magazzino/home-magazzino.component';
import { MagazzinoModuleRoutingModule } from './magazzino-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeMagazzinoComponent
  ],
  imports: [
    SharedModule,
    MagazzinoModuleRoutingModule
  ]
})
export class MagazzinoModule { }
