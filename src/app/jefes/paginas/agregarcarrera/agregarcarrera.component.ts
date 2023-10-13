import { Component, OnInit } from '@angular/core';
import { CarreraClase } from '../../interfaces/carreras.interface';
import { CarrerasService } from '../../services/carreras.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarcarrera',
  templateUrl: './agregarcarrera.component.html',
  styleUrls: ['./agregarcarrera.component.css']
})
export class AgregarcarreraComponent implements OnInit{
  ngModel:any;
  formulario:any;
  ngForm:any;

  model={ 
    nombre:'string',
    nombre_corto:'string',
    jdepto:'string',
    id:'number',
  }
id:any;
//Carrera: any;
  //carreras: any;

  
carrera = new CarreraClase();
    
constructor(private _cs: CarrerasService,
  private ar: ActivatedRoute,
  private router : Router){
    
  }

  ngOnInit(): void {
    
  }

  agregar(){
    this.carrera.id;
    this._cs.postCarreras(this.carrera).subscribe(
      res =>{
        Swal.fire({
          title:'Se agrego',
          text:'Carrera agregada',
          icon:'success'
        });
        this.router.navigate(['/jefes/carreras']);
      },
      err=>
      Swal.fire({
        title:'ERROR',
        text:'Carrera no agregada',
        icon:'error'
      })
    );
  }
/*
  agregar(){
    this.carrera.id;
    this._cs.postCarrera(this.Carrera).subscribe(
      res => {
        Swal.fire({
          title:'Se agrego',
          text:'Carrera agregada',
          icon: 'success',
        });
        this.router.navigate(['/jefes/carreras']);
      },
      err=>
      Swal.fire({
        title:' ERROR',
        text:'CARRERA NO AGREGADO',
        icon:'error',
      })
    );
  }
  */

}
