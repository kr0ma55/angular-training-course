import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {

  @Input() posts: Array<Post> = [];
  @Output() deletedPost = new EventEmitter<Post>();


  cancellaPost(inputUtente: Post) {
    this.deletedPost.emit(inputUtente);
  }


}
