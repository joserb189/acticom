import { Component, OnInit, NgModule } from '@angular/core';
import { DepartamentoClase } from '../../interfaces/departamentos.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../../services/departamento.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  ngModule:any;
  model={
    nombre:"string",
    id:"string",

  }

  id:any;
  departamento=new DepartamentoClase();
  constructor(private _ds: DepartamentoService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }

  
  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.obtenerDepartamento(this.id);
     }

     obtenerDepartamento(id:any){
      console.log(this.id);
      this._ds.getdepartamento(id).subscribe(
        (res:any) =>{
          this.departamento=res.data;
          console.log(this.departamento);
        }
      );
     }

     guardar(){
      this._ds.putDepartamento(this.departamento).subscribe(
        res => {
          Swal.fire({
            title: 'Departamento editado',
            icon:'success',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/jefes/departamento']);
  
        },
        err=>{
          Swal.fire({
            title: 'Departamento no editado',
            icon:'error',
            confirmButtonText:'OK'
          });
  
        }
      );
  
    }

    eliminar(){
      this._ds.deleteDepartamento(this.departamento.id).subscribe(
        res=>{
          Swal.fire({
            title:'Departamento eliminado',
            icon:'success',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/jefes/departamento']);
        },
        err=>{
          Swal.fire({
            title:'Departamento no eliminado',
            icon:'error',
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
