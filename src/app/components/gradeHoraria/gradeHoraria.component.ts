import { Component, type OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { GradeService } from './grade.service';

@Component({
  selector: 'app-grade-horaria',
  host: {ngSkipHydration: 'true'},
  imports: [MatCardModule, MatTabsModule, MatTableModule],
  templateUrl: './gradeHoraria.component.html',
  styleUrl: './gradeHoraria.component.scss',
})
export class GradeHorariaComponent implements OnInit {

  constructor( private gradeService: GradeService){ }
  
    estilosConfigVesp: any;
    estilosConfigNot: any;
  
  colunas = ['Horário', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'] 
  horariosVesp = ['14:00', '14:50', '15:40', '16:30', '17:20', '18:10'];
  horariosNot = ['19:00', '19:50', '20:40', '21:30', '22:20'];

  ngOnInit(): void {
    this.gradeService.getGradeVespConfigStyle().subscribe({
      next: data => this.estilosConfigVesp = data,
      error: error => console.error('Erro ao carregar o estilo do sidebar:', error)
    });

    this.gradeService.getGradeNotConfigStyle().subscribe({
      next: data => this.estilosConfigNot = data,
      error: error => console.error('Erro ao carregar o estilo do sidebar:', error)
    });
 }

}
