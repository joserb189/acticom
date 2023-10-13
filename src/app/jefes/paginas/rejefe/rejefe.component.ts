import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JefedepartamentoService } from 'src/app/jefes/services/jefedepartamento.service';
import { JefedepartamentoModel } from 'src/app/models/jefedepartamento.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rejefe',
  templateUrl: './rejefe.component.html',
  styleUrls: ['./rejefe.component.css']
})
export class RejefeComponent implements OnInit {
  ngModule: any;
   formulario:any;

  model={
    nombre :"string",
    apellidos: "string",
    clave: "string",
    fecha_ingreso: "string",
    fecha_termina: "string",
    status:"string",
    departamento:"string",
    rfc:"string",
   }

   rfc:any

   jefedepartamento: any;
   //Jefedepartamento :any;

   jefe = new JefedepartamentoModel('','','','','','','','');

  constructor(private _js: JefedepartamentoService,
    private router: Router){}

    ngOnInit(): void {
      }

      registrarse(){
        this.jefe.rfc;
        this._js.validaRfc(this.jefe.rfc).subscribe(
          res=>{
            console.log(res);
          }
        );
        /*this._js.postjefes(this.jefe).subscribe(
          res=>{
            Swal.fire({
              title: 'Registrado',
              text:'Jefe departamento registrado',
              icon:'success'
            });
            this.router.navigateByUrl('/jefes');
          },
          err => {
            Swal.fire({
              title:'ERROR',
              text:'Jefe departamento no registrado',
              icon: 'error'
            });
          }
        );
        */
      }

}
