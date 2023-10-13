import { Component, OnInit } from '@angular/core';
import { CarreraClase } from '../../interfaces/carreras.interface';
import { CarrerasService } from '../../services/carreras.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editarcarrera',
  templateUrl: './editarcarrera.component.html',
  styleUrls: ['./editarcarrera.component.css']
})
export class EditarcarreraComponent implements OnInit{
  ngModule: any;
  res:any;
  

  model={
    id: 'number',
    nombre_corto: "string",
    nombre:"string",
    jdepto: "string",   
  }
   id:any;
   
   carrera:any;
  carreras: any;
  
  constructor(private _cs: CarrerasService,
    private _ar: ActivatedRoute,
    private router: Router){ 
  }
  
  ngOnInit(): void {
    this.id = this._ar.snapshot.paramMap.get('id');
    this.obtenerCarrera(this.id); 
  }
  obtenerCarrera(id:any){
    console.log(this.id);
    this._cs.getCarrera(id).subscribe(
      (res:any)=>{
        this.carrera = res.data;
        console.log(this.carrera);
      }
    );
}

guardar(){
  this._cs.putCarreras(this.carrera).subscribe(
    res => {
    Swal.fire({
      title:'Carrera editado',
      icon:'success',
      confirmButtonText:'OK'
    });
    this.router.navigate(['/jefes/carreras']);
  },

    err => {
  Swal.fire({
    title:'Carrera no editado',
    icon: 'error',
    confirmButtonText:' OK'

  });
}
);


}

eliminar(){
  this._cs.deleteCarrera(this.carrera.id).subscribe(
    res=>{
      Swal.fire({
        title:'Carrera eliminada',
        icon:'success',
        confirmButtonText:'ok'
      });
      this.router.navigate(['/jefes/carreras']);
    },
    err=>{
      Swal.fire({
        title:'Carrera no eliminado',
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



/*
editar( ){
  this._cs.putCarrera(this.carrera).subscribe(
    res=>{
      Swal.fire({
        title: 'Carrera editada',
        icon: 'success',
        confirmButtonText:'OK',
        
      });
      this.router.navigate(['/carreras']);
    },
    err=>{
      Swal.fire({
        title: 'Carrera no editada',
        icon: 'error',
        confirmButtonText:'OK',
      });  

    }
  );
}
*/
}


