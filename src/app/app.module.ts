import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BenvenutoComponent } from './components/benvenuto/benvenuto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BenvenutoComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
    
    
    
     
  ],
  providers: [
      provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
