import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [  
      { path: 'create', component: CreateComponent },
      { path: 'read', component: ReadComponent},
      { path: 'edit', component: EditComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}