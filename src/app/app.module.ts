import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenvenutoComponent } from './components/benvenuto/benvenuto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { UserService } from './core/user.service';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BenvenutoComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
