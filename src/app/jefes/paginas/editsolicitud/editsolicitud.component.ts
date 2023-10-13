import { Component, OnInit } from '@angular/core';
import { SolicitudClase } from '../../interfaces/solicitud.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsolicitud',
  templateUrl: './editsolicitud.component.html',
  styleUrls: ['./editsolicitud.component.css']
})
export class EditsolicitudComponent implements OnInit{
  ngModule: any;
  formulario: any;

  model={
    status:'boolean',
    odservacion:'string',
    created_at:'number',
    valor_numerico:'number',
    periodo:'number',
    jdepto:'number',
    alumno:'number',
    act_complementaria:'number',
    id:'nunber',
  }
  id:any;
  solicitudes = new SolicitudClase();
  Solicitudes: any;
  Solicitud: any;
  //Solicitud: SolicitudInterface;
  constructor(private _ss: SolicitudService,
    private ar: ActivatedRoute,
    private router: Router){

}
  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.obtenersolicitud(this.id);
    }

    obtenersolicitud(id:any){
      console.log(this.id);
      this._ss.getSolicitud(id).subscribe(
        (res:any)=>{
          this.solicitudes= res.data;
          console.log(this.solicitudes);
        }
      )
    }

    guardar(){
      this._ss.putsolicitudes(this.Solicitud).subscribe(
        res=>{
          Swal.fire({
            title:'Solicitud editado',
            icon: 'success',
            confirmButtonText:'OK'
          });
          this.router.navigate(['/jefes/solicitud']);
        },
        err=>{
          Swal.fire({
            title:'Solicitud no editado',
            icon: 'error',
            confirmButtonText:'OK'
          })
        }
      )
    }

    eliminar(){
      this._ss.deletesolicitud(this.solicitudes.id).subscribe(
        res=>{
          Swal.fire({
            title:'Solicitud eliminado',
            icon:'success',
            confirmButtonText:'OK'
          });
        }
      )
    }

}
