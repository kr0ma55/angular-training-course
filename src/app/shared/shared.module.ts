import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    MatIconModule,
    PaginatorComponent
  ]
})
export class SharedModule { }
