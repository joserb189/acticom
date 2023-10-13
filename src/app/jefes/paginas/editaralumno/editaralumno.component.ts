import { Component, OnInit, NgModule } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup } from '@angular/forms';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoClase } from '../../interfaces/alumnos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editaralumno',
  templateUrl: './editaralumno.component.html',
  styleUrls: ['./editaralumno.component.css']
})
export class EditaralumnoComponent implements OnInit{
  ngModule: any;
  


  model={
    carrera: 'number',
    nip: "number",   
    nombre: "string",
    a_paterno: "string",
    a_materno: "string",
    no_control: 'number',
  }
res: any;
  no_control: any;
  alumno:any;

  alumnos = new AlumnoClase();
  constructor(private _as: AlumnosService,
    private ar: ActivatedRoute,
    private router: Router){    
  }

  ngOnInit(): void {
    this.no_control = this.ar.snapshot.paramMap.get('no_control');
    this.obtenerAlumno(this.no_control);
  }
  obtenerAlumno(no_control:any){
    console.log(this.no_control);
    this._as.getAlumno(no_control).subscribe(
      (res:any)=>{
        this.alumno = res.data;
        console.log(this.alumno);
      }
    );
  }
  guardar(){
    this._as.putAlumno(this.alumno).subscribe(
      res=>{
        Swal.fire({
          title:'Alumno editado',
          icon:'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/alumnos']);

      },
      err =>{
        Swal.fire({
          title:'Alumno no editado',
          icon:'error',
          confirmButtonText:'OK'
        });
      }
    );
  }

  eliminar(){
    this._as.deleteAlumno(this.no_control).subscribe(
      res => {
        Swal.fire({
          title: 'Alumno eliminado',
          icon: 'success',
          confirmButtonText: 'OK'

        });
        this.router.navigate(['/jefes/alumnos']);

      },
      err => {
        Swal.fire({
          title: 'Alumno no eliminado',
          icon: 'error',
          confirmButtonText:'OK'
        });
      }
    );
  }
}
