import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BenvenutoComponent } from './components/benvenuto/benvenuto.component';





const routes: Routes = [
  {
    path: '',
    component: BenvenutoComponent,
  },
  {
    path: 'magazzino',
    loadChildren: () =>
      import('./module/magazzino/magazzino.module').then((m) => m.MagazzinoModule),
  },
  {
    path: 'contabilita',
    loadChildren: () =>
      import('./module/contabilita/contabilita.module').then((m) => m.ContabilitaModule),
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
