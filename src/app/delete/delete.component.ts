import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgenteService } from '../services/agente.service';

@Component({
  selector: 'app-delete',
  imports: [FormsModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'] // Corrigido de `styleUrl` para `styleUrls`
})
export class DeleteComponent {
  msg: string = ''; // Mensagem de retorno
  id: number = 0; // ID do agente

  constructor(private agenteService: AgenteService) { }

  delete(): void {
      this.agenteService.deleteAgente(this.id).subscribe({
        next: () => {
          this.msg = 'Agente deletado com sucesso!';
          this.id = 0;
        },
        error: (err) => {
          console.error('Erro ao deletar agente', err);
        }
      });
  }
}
