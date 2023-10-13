import { Component, OnInit } from '@angular/core';
import { JefedepartamentoClase } from '../../interfaces/jefedepartamento.interface';
import { JefedepartamentoService } from '../../services/jefedepartamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarjefe',
  templateUrl: './agregarjefe.component.html',
  styleUrls: ['./agregarjefe.component.css']
})
export class AgregarjefeComponent implements OnInit{

  ngModel:any;
  formulario:any;
  ngForm:any;

  model={
    nombre:'string',
    apellidos:'string',
    clave:'number',
    fecha_ingreso:'string',
    fecha_termina:'string',
    status:'string',
    departamento:'string',
    rfc:'string',
  }
  rfc:any;
  

  Jefes = new JefedepartamentoClase();
  //jefes: any;
  constructor(private _js: JefedepartamentoService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }


  ngOnInit(): void {
   }


  agregar(){
    this.Jefes.rfc;
    this._js.postJefes(this.Jefes).subscribe(
      res =>{
        Swal.fire({
          title:'Se agrego',
          text:'Jefe departamento agregado',
          icon:'success',
        });
        this.router.navigate(['/jefes/jefedepartamento']);
      },
      err=>
      Swal.fire({
        title:'Error',
        text:'jefe departamento no agregado',
        icon:'error'
      })
    );
  }

}
