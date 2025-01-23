import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AgenteService } from '../services/agente.service';
import { Agente } from '../model/agente';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent implements OnInit {
  listaAgentes: Agente[] = [];
  constructor(private agenteService: AgenteService){}

  ngOnInit(): void {
    this.read();
  }

  read(): void{
    this.agenteService.readAgentes().subscribe({
      next: (dados: any) => {
        this.listaAgentes = dados;
        console.table(this.listaAgentes)
      },
      error: (erro) => {
        console.error('Aconteceu algum problema', erro);
      }
    });
  }

}
