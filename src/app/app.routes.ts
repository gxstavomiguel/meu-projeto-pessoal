import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { UpdateComponent } from './edit/update.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [ 
      { path: 'create', component: CreateComponent },
      { path: 'read', component: ReadComponent},
      { path: 'update', component: UpdateComponent},
      { path: 'delete', component: DeleteComponent}

      
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}