import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgenteService } from '../services/agente.service';
import { Agente } from '../model/agente';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})


export class CreateComponent {
  agente = { id: 0 , nome: '', skill: '', tipo: ''};

  constructor(private agenteService: AgenteService) {}

    save(){
      this.agenteService.createAgente(this.agente).subscribe(
        (response) => {
          console.log('Agente salvo com sucesso', response);
          alert('Agente cadastrado com sucesso!');
          this.resetForm();
        },
        (error) => {
          console.error('Erro ao salvar o agente:', error);
          const errorMSG = error.error?.message || 'Erro desconhecido';
          alert(` Erro ao cadastrar o agente. Tente novamente. ${errorMSG}`);

        }
      ); 
        }
  resetForm() {
    this.agente = {
      id: 0,
      nome: '',
      skill: '',
      tipo: ''
    };
  }
    }

