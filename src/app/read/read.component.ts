import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AgenteService } from '../services/agente.service';
import { Agente } from '../model/agente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent implements OnInit {
  agente = { id: 0 , nome: '', skill: '', tipo: ''};
  msg : string = '';

  listaAgentes: Agente[] = [];
  constructor(private agenteService: AgenteService){}

  ngOnInit(): void {
    this.read();
  }

  read(): void{
    this.agenteService.readAgentes().subscribe({
      next: (dados: Agente[]) => {
        this.listaAgentes = dados;
        console.table(this.listaAgentes)
        this.listaAgentes = dados.map(agente => ({ ...agente, isEditing: false}));
        console.log('Até essa parte está funcionando!')
      },
      error: (erro) => {
        console.error('Aconteceu algum problema', erro);
      }
    });
  }

  update(): void {
    this.agenteService.editAgente(this.agente.id, this.agente).subscribe({
      next: () => {
        this.msg = 'Agente atualizado!';
        this.read();
      },
      error: (err) => {
        console.error('Aconteceu algum erro!', err);
      }
    });
  }

  delete(id: number): void {
    this.agenteService.deleteAgente(id).subscribe({
      next: () => {
        this.msg = 'Agente deletado com sucesso!';
        this.read();
      },
      error: (err) => {
        console.error('Erro ao deletar agente', err);
      }
    });
  }

}
