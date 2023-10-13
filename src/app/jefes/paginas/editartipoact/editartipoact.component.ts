import { Component, OnInit } from '@angular/core';
import { TipoactClase } from '../../interfaces/tipoact.interface';
import { TipoactividadService } from '../../services/tipoactividad.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editartipoact',
  templateUrl: './editartipoact.component.html',
  styleUrls: ['./editartipoact.component.css']
})
export class EditartipoactComponent implements OnInit{
  ngModule: any;
  formulario: any;

  model={
    max_creditos:'number',
    nombre:'string',
    id:'number',
  }
  
  id: any;

  tipoact = new TipoactClase();
  constructor( private _ts: TipoactividadService,
    private ar: ActivatedRoute,
    private router: Router){

    }

  ngOnInit(): void {
   this.id = this.ar.snapshot.paramMap.get('id');
   this.obtenerTipoact(this.id);
  }
  
  obtenerTipoact(id:any){
    console.log(this.id);
    this._ts.gettipoact(id).subscribe(
      (res:any)=>{
        this.tipoact= res.data;
        console.log(this.tipoact);
      }
    )
  }

  guardar(){
    this._ts.puttipoact(this.tipoact).subscribe(
      res=>{
        Swal.fire({
          title:'Tipo actividad editado',
          icon:'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/tipoactividad']);

      },
      err=>{
        Swal.fire({
          title:'Tipo actividad no editado',
          icon:'error',
          confirmButtonText:'OK'
        })
      }
    )
  }
  
  eliminar(){
    this._ts.deletetipoact(this.tipoact.id).subscribe(
      res=>{
        Swal.fire({
          title:'Tipo actividad eliminado',
          icon:'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/tipoactividad']);
      },
      err=>{
        Swal.fire({
          title:'Tipoactividad no eliminado',
          icon:'error',
          confirmButtonText:'OK'
        });
      }
    )
  }
 
}

 /*
eliminar(){
    this._as.deleteAlumno(this.alumno.no_control).subscribe(
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
*/


/*
 ngModule: any;
  formulario: any;


  model={
    carrera: 'string',
    nip: "number",   
    nombre_completo: "string",
    no_control: 'number',
  }

  no_control: any;

  alumno = new AlumnoClase();
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
*/