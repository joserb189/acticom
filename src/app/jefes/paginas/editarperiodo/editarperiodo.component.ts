import { Component, OnInit } from '@angular/core';
import { PeriodoService } from '../../services/periodo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodoClase } from '../../interfaces/periodo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarperiodo',
  templateUrl: './editarperiodo.component.html',
  styleUrls: ['./editarperiodo.component.css']
})
export class EditarperiodoComponent  {
  ngModule :any;

  model={
    status: 'boolean',
    periodo: 'string',
    mes_ini: 'date',
    mes_fin: 'date',
    anio: 'number',
    id: 'string',
  }


  id : any;
  periodo:any;
  constructor (private periodoservice: PeriodoService,
    private ar: ActivatedRoute,
    private router: Router){
  
  }
  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
   this.obtenerPeriodo(this.id);
  }
  
  obtenerPeriodo(id:any){
    console.log(this.id);
    this.periodoservice.getPeriodo(id).subscribe(
      (res:any)=>{
        this.periodo = res.data;
        console.log(this.periodo);
      }
    );
  }

  guardar(){
    this.periodoservice.putPeriodo(this.periodo).subscribe(
      res => {
        console.log("entro");
       Swal.fire({
          title: 'Periodo editado',
          icon:'success',
          confirmButtonText:'OK'
        });
        
        this.router.navigate(['/jefes/periodo']);

      },
      err => {
        console.log("falla");
        Swal.fire({
          title:'Periodo no editado',
          icon:'error',
          confirmButtonText:'ok'
        });
        
      }
    );
  }

  eliminar() {
    this.periodoservice.deleteperiodo(this.periodo.id).subscribe(
      res=>{
        Swal.fire({
          title:'Periodo eliminado',
          icon: 'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/periodo']);
      },
      err=>{
        Swal.fire({
          title:'Periodo no eliminado',
          icon:'error',
          confirmButtonText:'OK'
        });
      }
    )
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
  
  
  

  /*constructor (private _ps:PeriodoService,
    private ar: ActivatedRoute,
    private router: Router) {
      this.id = this.ar.snapshost.params.id;
      
    }
 */
    
    
    

  /*ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
*/
}
