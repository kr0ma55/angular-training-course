import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrl: './modale.component.css'
})
export class ModaleComponent {
  formData: Post = {
    title: '',
    body: ''
  };

  pippo= 'ciao';


@Output() close = new EventEmitter<void>();
@Output() submitData = new EventEmitter<Post>();

closeModal() {
  this.close.emit();
}


submitForm() {
  this.submitData.emit(this.formData);
  this.closeModal();
  // alert('nuovo post aggiunto')
}


}
