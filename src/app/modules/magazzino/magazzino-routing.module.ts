import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMagazzinoComponent } from './components/home-magazzino/home-magazzino.component';



const routes: Routes = [{ path: '', component: HomeMagazzinoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazzinoModuleRoutingModule { }
