import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginaUtentiComponent } from './pagina-utenti/pagina-utenti.component';
import { PaginaPostComponent } from './pagina-post/pagina-post.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabellaComponent } from './tabella/tabella.component';
import { ModaleComponent } from './modale/modale.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PaginaPostComponent,
    PaginaUtentiComponent,
    TabellaComponent,
    ModaleComponent
  
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [
    
  
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
