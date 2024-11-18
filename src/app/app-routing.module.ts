import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenvenutoComponent } from './components/benvenuto/benvenuto.component';

const routes: Routes = [
  {
    path: '',
    component: BenvenutoComponent,
  },
  {
    path: 'magazzino',
    loadChildren: () =>
      import('./modules/magazzino/magazzino.module').then((m) => m.MagazzinoModule),
  },
  {
    path: 'contabilita',
    loadChildren: () =>
      import('./modules/contabilita/contabilita.module').then((m) => m.ContabilitaModule),
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
