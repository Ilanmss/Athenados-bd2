import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SidebarService } from './sidebar.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit { 
  
  constructor( private sidebarService: SidebarService){ }

  estilosConfigSidebar: any;

  ngOnInit(): void {
    this.sidebarService.getSidebarConfigStyle().subscribe({
      next: data => this.estilosConfigSidebar = data,
      error: error => console.error('Erro ao carregar o estilo do sidebar:', error)
    });
  }

}
