import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../../../../shared/post.model';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrl: './modale.component.css'
})
export class ModaleComponent implements OnInit {
  formData: Post = {
    title: '',
    body: ''
  };

  pippo= 'ciao';
  constructor(private dialogRef : MatDialogRef<ModaleComponent>,@Inject(MAT_DIALOG_DATA) public data: {title: string,body:string}){
    
  }
  ngOnInit(): void {
   console.log(this.data.title);
   this.formData.title = this.data.title;
   this.formData.body = this.data.body;
  }


@Output() close = new EventEmitter<void>();
@Output() submitData = new EventEmitter<Post>();

closeModal() {
  this.dialogRef.close(); 
}


submitForm() { 
  this.dialogRef.close(this.formData); 
  
  // alert('nuovo post aggiunto')
}


}
