import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { GradeHorariaComponent } from './components/gradeHoraria/gradeHoraria.component';
import { ComunicadosService } from './comunicados.service';
import { ComunicadoComponent } from "./components/comunicado/comunicado.component";

@Component({
  selector: 'app-root',
  imports: [MatGridListModule, SidebarComponent, GradeHorariaComponent, ComunicadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor( private comunicadoService: ComunicadosService){ }
  
    estilosConfigComunicados: any[] =[];
  
    ngOnInit(): void {
      this.comunicadoService.getComunicadosConfigStyle().subscribe({
        next: data => this.estilosConfigComunicados = data,
        error: error => console.error('Erro ao carregar o estilo do sidebar:', error)
      });
    }


}
