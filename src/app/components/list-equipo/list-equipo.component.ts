import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../shared/services/equipo.service';

@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.css']
})
export class ListEquipoComponent implements OnInit {

  EquiposList: any = [];

  ngOnInit() {
    this.loadEquipos();
  }
  constructor(
    public equipoService: EquipoService
  ) { }
  // Issues list
  loadEquipos() {
    return this.equipoService.GetEquipos().subscribe((data: {}) => {
      this.EquiposList = data;
    })
  }
  // Delete issue
  deleteEquipo(data: any) {
    var index = this.EquiposList.equipos.map((x: any) => {
      return x.equipo
     })
     .indexOf(data.equipo);

    return this.equipoService.DeleteEquipo(data.id).subscribe(res => {
      this.EquiposList.equipos.splice(index, 1)
      console.log('Equipo eliminado!')
    })
  }
}
