import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-comunicado',
  imports: [MatCardModule],
  templateUrl: './comunicado.component.html',
  styleUrl: './comunicado.component.scss',
})
export class ComunicadoComponent { 
  @Input() titulo!: string;
  @Input() descricao!: string;
}
