import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from '../../shared/services/equipo.service';

@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.css']
})
export class AddEquipoComponent implements OnInit {

  equipoForm: FormGroup | any;
  IssueArr: any = [];
  ngOnInit() {
    this.addEquipo();
  }
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public equipoService: EquipoService
  ) {}

  addEquipo() {
    this.equipoForm = this.fb.group({
      equipo: [''],
      estado: [''],
    });
  }

  submitForm() {
    this.equipoService.CreateEquipo(this.equipoForm.value).subscribe((res) => {
      console.log('Equipo agregado!');
      this.ngZone.run(() => this.router.navigateByUrl('/list-equipos'));
    });
  }
}
