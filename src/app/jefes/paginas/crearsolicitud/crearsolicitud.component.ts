import { Component, OnInit } from '@angular/core';
import { SolicitudClase } from '../../interfaces/solicitud.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearsolicitud',
  templateUrl: './crearsolicitud.component.html',
  styleUrls: ['./crearsolicitud.component.css']
})
export class CrearsolicitudComponent implements OnInit {

  ngModel:any;
  formulario:any;
  ngForm:any;

  model={
    id:"string",
    status:"boolean",
    observacion:"string",
    created_at:"string",
    valor_numerico:"string",
    periodo:"string",
    jdepto:"string",
    alumno:"string",  
    act_complementaria:"string",
  }

  solicitud = new SolicitudClase();
  solicitudes: any;
  constructor(private _ss: SolicitudService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  guardar(){
    this.solicitud.id;
    this._ss.postsolicitud(this.solicitudes).subscribe(
      res =>{
        Swal.fire({
          title:'Se guardo',
          text:'Solicitud guardado',
          icon: 'success'
        });
        this.router.navigate(['/jefes/solicitus']);
      },
      err=>
      Swal.fire({
        title:'Error',
        text:'Solicitud no guardado',
        icon: 'error'
      })
    );
  }
}
