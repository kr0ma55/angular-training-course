import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'yt-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  _inputStrano!: string;
  @Input() titoloFooter: string = 'TITOLO ITA';
  @Input()
  set inputStrano(value: string) {
    this._inputStrano = value.toLowerCase();
  }
 
  @Output() emettiAlertLetterProibita = new EventEmitter<string>();
  

  constructor() {

  }
  

}

