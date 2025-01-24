import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from "./create/create.component";
import { ReadComponent } from "./read/read.component";
import { UpdateComponent } from "./edit/update.component";
import { DeleteComponent } from "./delete/delete.component";
import { FormsModule } from '@angular/forms';
import { InputBuscaComponent } from "./input-busca/input-busca.component";

@Component({
  selector: 'app-root',
  imports: [ReadComponent],
  // imports: [DeleteComponent, UpdateComponent, ReadComponent, CreateComponent, InputBuscaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-projeto-pessoal';
}



