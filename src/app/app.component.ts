import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudComponent } from "./crud/crud.component";
import { CreateComponent } from "./create/create.component";
import { ReadComponent } from "./read/read.component";

@Component({
  selector: 'app-root',
  imports: [CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-projeto-pessoal';
}
