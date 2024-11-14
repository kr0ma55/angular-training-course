import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModaleComponent } from './components/modale/modale.component';
import { PaginaPostComponent } from './components/pagina-post/pagina-post.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { ContabilitaRoutingModule } from './contabilita-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ModaleComponent,
    PaginaPostComponent,
    TabellaComponent

  ],
  imports: [
    CommonModule,
    ContabilitaRoutingModule,
    SharedModule
    
    

  ]
})
export class ContabilitaModule { }
