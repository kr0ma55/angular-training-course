import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMagazzinoComponent } from './components/home-magazzino/home-magazzino.component';
import { InventarioComponent } from './components/inventario/inventario.component';



const routes: Routes = [{ path: '', component: HomeMagazzinoComponent },
  { path: 'inventario', component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazzinoModuleRoutingModule { }
