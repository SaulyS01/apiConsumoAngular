import { Component, OnInit, NgZone } from '@angular/core';
import { EquipoService } from '../../shared/services/equipo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-equipo',
  templateUrl: './edit-equipo.component.html',
  styleUrls: ['./edit-equipo.component.css']
})
export class EditEquipoComponent implements OnInit {

  EquiposList: any = [];
  updateEquipoForm: FormGroup | any;
  equipoU: any = {}

  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,
    public equipoService: EquipoService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.equipoService.GetEquipo(id).subscribe((data) => {

      this.equipoU = data.equipo
      console.log(data.equipo);
      

      this.updateEquipoForm = this.fb.group({
        equipo: [this.equipoU.equipo],
        estado: [this.equipoU.estado]
      })
    })
  }

  updateForm() {
    this.updateEquipoForm = this.fb.group({
      equipo: [''],
      estado: ['']
    })
  }

  submitForm() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.equipoService.UpdateEquipo(id, this.updateEquipoForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/list-equipos'))
    })
  }
}
