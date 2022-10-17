import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEquipoComponent } from './components/add-equipo/add-equipo.component';
import { EditEquipoComponent } from './components/edit-equipo/edit-equipo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-equipos' },
  { path: 'add-equipo', component: AddEquipoComponent },
  { path: 'edit-equipo/:id', component: EditEquipoComponent },
  { path: 'list-equipos', component: ListEquipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
