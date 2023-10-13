import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudes: SolicitudModel[]=[];
  router:any;
  id: any;

  constructor(private solicitudService: SolicitudService){

  }
 
  ngOnInit(): void {
    this.listadosolicitud();
  }

  listadosolicitud(){
    this.solicitudService.getSolicitudes()
    .subscribe((res:any)=>{
      this.solicitudes = res.data;
      console.log(this.solicitudes);
      console.log(res.data);
    },(err)=>{
      console.log(err);
    }
    );
  }

}
