import { Component, OnInit, NgModule } from '@angular/core';
import { JefedepartamentoClase } from '../../interfaces/jefedepartamento.interface';
import { JefedepartamentoService } from '../../services/jefedepartamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
//import { Jefes } from '../../interfaces/jefes.interface';

@Component({
  selector: 'app-editarjefedep',
  templateUrl: './editarjefedep.component.html',
  styleUrls: ['./editarjefedep.component.css']
})
export class EditarjefedepComponent implements OnInit {
   ngModule: any;
   formulario:any;

   model={
    nombre :"string",
    apellidos: "string",
    clave: "string",
    fecha_ingreso: "string",
    fecha_termina: "string",
    status:"boolean",
    departamento:"string",
    rfc:"string",
   }

  //rfc:any;

  jefe:any;
  JefedepartamentoService: any;
  jefes: any;
  rfc: any;
  
  
  

   constructor(private _js: JefedepartamentoService, 
    private ar: ActivatedRoute,
    private router: Router){
}

  ngOnInit(): void {
    this.rfc = this.ar.snapshot.paramMap.get('rfc');
    this.obtenerJefes(this.rfc);

   }

   obtenerJefes(rfc:any){
    console.log(this.rfc);
    this._js.getjefe(rfc).subscribe(
    (res:any)=>{
      this.jefe = res.data;
      console.log(this.jefe);
    }
    );
   }

   guardar(){
    this._js.putjefes(this.jefe).subscribe(
      res => {
        console.log("entro");
        Swal.fire({
          title: 'Jefe departamento editado',
          icon:'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/jefes/jefedepartamento']);

      },
      err =>{
        Swal.fire({
          title: 'Jefe departamento No editado',
          icon:'error',
          confirmButtonText:'OK'
        });
      }
    );
    
  }

eliminar(){
this._js.deletejefe(this.jefe.rfc).subscribe(
  res=>{
    Swal.fire({
      title:'Jefe departamento eliminado',
      icon:'success',
      confirmButtonText:'OK'
    });
    this.router.navigate(['/jefes/jefedepartamento']);
  },
  err=>{
    Swal.fire({
      title:'Jefe departamento no eliminado',
      icon: 'error',
      confirmButtonText:'OK'
    });
  }
);
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
  
}
 


