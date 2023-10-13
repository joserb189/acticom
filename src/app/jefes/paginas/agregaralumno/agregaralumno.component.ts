import { Component, OnInit } from '@angular/core';
import { AlumnoClase } from '../../interfaces/alumnos.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregaralumno',
  templateUrl: './agregaralumno.component.html',
  styleUrls: ['./agregaralumno.component.css']
})
export class AgregaralumnoComponent implements OnInit {
  ngModel:any;
  formulario:any;
  ngForm:any;

  model={
    no_control:'number',
    nombre:'string',
    a_paterno:'string',
    a_materno:'string',
    nip:'numbre',
    carrera:'number',
  }
  no_control:any;

  //alumnos: any;
  //Alumno: any;
  alumnos = new AlumnoClase();
  constructor(private _as: AlumnosService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }
  ngOnInit(): void {
    
  }

  agregar(){
    this.alumnos.no_control;
    this._as.postAlumnos (this.alumnos).subscribe(
      res=>{
        Swal.fire({
          title:'Se agrego el alumno',
          text:'Alumno Agregado',
          icon:'success'
        });
        this.router.navigate(['/jefes/alumnos']);
      },
      err=>
      Swal.fire({
        title:'Error',
        text: 'Alumno no agregado',
        icon:'error'
      })
    );
  }

}
