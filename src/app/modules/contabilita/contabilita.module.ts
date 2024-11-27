import { NgModule } from '@angular/core';
import { HomeContabilitaComponent } from './components/home-contabilita/home-contabilita.component';
import { ContabilitaRoutingModule } from './contabilita-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HomeContabilitaComponent
  ],
  imports: [
    SharedModule,
    ContabilitaRoutingModule
  ]
})
export class ContabilitaModule { }
