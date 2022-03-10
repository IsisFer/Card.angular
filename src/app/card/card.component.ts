import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo: string = 'titulo'

  @Input()
  parte1: string = 'subtitulo'

  @Input()
  parte2: string = 'conteudo'

  @Input()
  parte3: string = 'conteudo1'

  @Input()
  parte4: string = 'conteudo2'

  @Input()
  bg: string = ''

  @Output()
  start:EventEmitter<any>= new EventEmitter<any>()
  clicar(): void {
    this.start.emit()
  }

}
