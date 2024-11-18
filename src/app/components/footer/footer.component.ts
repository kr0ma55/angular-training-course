import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  inserimento!:string;
  nomeVar = 'PIPP';

  padreIntercettaEventoFiglio(event:string){
    alert(event)
  }
  ngOnInit(){
    this.inserimento = 'CIAO ANGELO';
  }

}
