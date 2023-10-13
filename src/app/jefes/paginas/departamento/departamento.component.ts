import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { departamentoModel } from 'src/app/models/departamento.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamento: departamentoModel []=[];
  private _ds: any;
  router: any;
  activatedRoute:any;
  departamentos: any;
  id:any;
  Departamento: any;
  

  constructor( private departamentoService: DepartamentoService){
   
  }
  ngOnInit(): void {
    this.listadodepartamentos();
  }

  listadodepartamentos(){
   this.departamentoService.getdepartamentos()
   .subscribe((res:any)=>{
    this.departamentos = res.data;
    console.log(this.departamentos);
    console.log(res); 
   },(err)=>{
    console.log(err);
   }
   );
  }



  eliminar(){
    this._ds.deletedepartamento(this.Departamento).subscribe(
      (      res: any)=> {
        Swal.fire({
          title: 'Departamento eliminado',
          icon:'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['/jefedepartamento/listadojefedepartamento']);

      },
      (      err: any)=>{
        Swal.fire({
          title: 'Jefe departamento No guardado',
          icon:'error',
          confirmButtonText:'OK'
        });

      }
    );
    
}
  }

  /*
   alumnos : AlumnoModel [] = [];
  private _as: any;
  router: any;
  activatedRoute: any;
  
  
  constructor( private alumnosService: AlumnosService){

}
  ngOnInit(): void {
    this.listadoalumnos();
  }

  listadoalumnos(){

    this.alumnosService.getAlumnos()
    .subscribe((res: any) => {
      this.alumnos = res.data;
      console.log(this.alumnos);
      console.log(res);
    },(err)=>{
      console.log(err);
    }
    );
  */

  
