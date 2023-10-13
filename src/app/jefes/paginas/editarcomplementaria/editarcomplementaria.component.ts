import { Component, OnInit } from '@angular/core';
import { ActicomplementariaClase } from '../../interfaces/acticomplementarias.interface';
import { ActicomplementariasService } from '../../services/acticomplementarias.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ActividadescomplementariasModel } from 'src/app/models/actividadescomplementarias.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarcomplementaria',
  templateUrl: './editarcomplementaria.component.html',
  styleUrls: ['./editarcomplementaria.component.css']
})
export class EditarcomplementariaComponent implements OnInit{
  ngModel: any;
  formulario:any;
 
model={

  act_gnral: 'string',
  act_especifica: 'string',
   credito: 'boolean',
  lugar: 'string',
  num_participantes: 'string',
   tiempo: 'string',
   descripcion: "string",
   tipo: 'string',
   id: 'number',
}

id:any;

//acticomplementaria = new ActividadcomplementariaClase();
  actcomplementaria: any;
  ActicomplementariasService: any;
  
  
constructor(private _as: ActicomplementariasService,
  private ar: ActivatedRoute,
  private router:Router){    
}

  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.obtenerActcomplementarias(this.id);
  }
  obtenerActcomplementarias(id : any) {
    console.log(this.id);
    this._as.getActcomplementaria(id).subscribe(
      (res:any)=>{
        this.actcomplementaria = res.data;
        console.log(this.actcomplementaria);
      }
    );
    /*
   this._as.getActcomplementarias(id).subscribe(
      (res:any)=>{
        this.actcomplementaria = res.data;
        console.log(this.actcomplementaria);
      }
    );
    */
  }

  guardar(){
    this._as.putactcomplementarias(this.actcomplementaria).subscribe(
      res => {
        console.log("error");
        Swal.fire({
          title:'Actividadad complementaria editado',
          icon:'success',
          confirmButtonText:'OK',
        });
        this.router.navigate(['jefes/actividadescomplementarias']);

      },
      err => {
        Swal.fire({
          title:'Complementaria no editado',
          icon:'success',
          confirmButtonText:'OK'
        });
      }

      );
  }

  eliminar(){
    this._as.deleteactcomplementarias(this.actcomplementaria.id).subscribe(
      res=>{
        Swal.fire({
          title:'Actividad eliminada',
          icon:'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/actividadescomplementarias']);
      },
      err=>{
        Swal.fire({
          title:'Actividad no eliminado',
          icon:'error',
          confirmButtonText:'OK'
        });
      }

    );
  }
  

}


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
