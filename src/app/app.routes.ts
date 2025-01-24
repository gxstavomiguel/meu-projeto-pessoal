import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './edit/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '',  component: AppComponent },
  { path: 'create', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent }
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}