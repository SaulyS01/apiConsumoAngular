import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEquipoComponent } from './components/add-equipo/add-equipo.component';
import { EditEquipoComponent } from './components/edit-equipo/edit-equipo.component';
import { ListEquipoComponent } from './components/list-equipo/list-equipo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//http api
import { HttpClientModule } from '@angular/common/http';
import { EquipoService } from './shared/services/equipo.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEquipoComponent,
    EditEquipoComponent,
    ListEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
