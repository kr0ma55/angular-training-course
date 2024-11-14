import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPostComponent } from './components/pagina-post/pagina-post.component';

const routes: Routes = [{ path: '', component: PaginaPostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilitaRoutingModule { }
