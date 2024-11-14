import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazzinoComponent } from './components/pagina-amici/home-magazzino.component';


const routes: Routes = [{ path: '', component: MagazzinoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazzinoModuleRoutingModule { }
