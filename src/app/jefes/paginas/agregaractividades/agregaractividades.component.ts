import { Component, OnInit } from '@angular/core';
import { ActicomplementariasService } from '../../services/acticomplementarias.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActicomplementariaClase } from '../../interfaces/acticomplementarias.interface';


@Component({
  selector: 'app-agregaractividades',
  templateUrl: './agregaractividades.component.html',
  styleUrls: ['./agregaractividades.component.css']
})
export class AgregaractividadesComponent implements OnInit{
  ngModel:any;
  formulario:any;
  ngForm:any;

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
 

  acticomplementaria = new ActicomplementariaClase();
  actcomplementaria: any;
  
  //acticomplementaria: any;
  //actividadescomplementarias: any;
 
  //Actividadescomplementarias: any;
  

 
  constructor(private _as: ActicomplementariasService,
    private ar:ActivatedRoute,
    private router: Router){
      
    }

  ngOnInit(): void {
    }

    agregar(){
      this.acticomplementaria.id;
      this._as.postActcomplementarias (this.actcomplementaria).subscribe(
        res =>{
          Swal.fire({
            title:'Se agrego',
            text:'Actividad complementaria agregado',
            icon:'success',
          });
          this.router.navigate(['/jefes/actividadescomplementarias']);
        },
        err=>
        Swal.fire({
          title:'Error',
          text:'Actividad complementaria no agregado',
          icon:'error',
        })
      );
    }

}
