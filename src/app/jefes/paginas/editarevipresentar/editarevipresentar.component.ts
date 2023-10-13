import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvidenciapresentarService } from '../../services/evidenciapresentar.service';
import { Evidenciapresentar } from '../../interfaces/evidenciapresentar.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editarevipresentar',
  templateUrl: './editarevipresentar.component.html',
  styleUrls: ['./editarevipresentar.component.css']
})
export class EditarevipresentarComponent implements OnInit {
  ngModule: any;
  formulario: any;

  model={
    id:'number',
    descripcion:'string',
  }
  id: any;
  evidenciapresentar: any;

  Evidenciapresentar = new Evidenciapresentar();

  constructor(private _es: EvidenciapresentarService,
    private ar: ActivatedRoute,
    private router: Router){

    }
  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.obtenerevidenciapresentar(this.id);
   }

   obtenerevidenciapresentar(id:any){
    console.log(this.id);
    this._es.getEvidenciapresentar(id).subscribe(
      (res:any)=>{
        this.evidenciapresentar = res.data;
        console.log(this.evidenciapresentar);
      }
    )
   }

   guardar(){
    this._es.putEvidenciapresentar(this.evidenciapresentar).subscribe(
      res=>{
        Swal.fire({
          title:'Evidencia a presentar editado',
          icon:'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/evidenciapresentar']);

      },
      err=>{
        Swal.fire({
          title:'Evidencia a presentar editado',
          icon:'success',
          confirmButtonText:'OK'
        })
      }
    )
   }

   eliminar(){
    this._es.deleteevidenciapresentar(this.evidenciapresentar).subscribe(
      res=>{
        Swal.fire({
          title:'Evidencia a presentar eliminado',
          icon:'success',
          confirmButtonText:'OK',
        });
        this.router.navigate(['/jefes/evidenciapresentar']);
      },
      err=>{
        Swal.fire({
          title:'Evidencia a presentar no eliminado',
          icon: 'error',
          confirmButtonText:'OK'
        });
      }
    )
   }

}
