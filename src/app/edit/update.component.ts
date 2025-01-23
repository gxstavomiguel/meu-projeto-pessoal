import { Component } from '@angular/core';
import { AgenteService } from '../services/agente.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  agente = { id: 0 , nome: '', skill: '', tipo: ''};
  msg : string = '';

  constructor(private agenteService: AgenteService) {}

  update(): void {
    this.agenteService.editAgente(this.agente.id, this.agente).subscribe({
      next: () => {
        this.msg = 'Agente atualizado!';
      },
      error: (err) => {
        console.error('Aconteceu algum erro!', err);
      }
    });
  }
}
