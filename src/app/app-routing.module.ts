import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaUtentiComponent } from './pagina-utenti/pagina-utenti.component';
import { PaginaPostComponent } from './pagina-post/pagina-post.component';


const routes: Routes = [
  { path: 'posts-list', component: PaginaPostComponent },
  { path: 'users-list', component: PaginaUtentiComponent },
  { path: '',   redirectTo: '/posts-list', pathMatch: 'full' }
 /*  

  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
