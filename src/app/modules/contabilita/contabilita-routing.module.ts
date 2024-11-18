import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContabilitaComponent } from './components/home-contabilita/home-contabilita.component';


const routes: Routes = [{ path: '', component: HomeContabilitaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilitaRoutingModule { }
