import { Component, OnInit } from '@angular/core';
import { EvidenciacomprobatoriaService } from '../../services/evidenciacomprobatoria.service';
import { EvidenciacomprobatoriaModel } from 'src/app/models/evidenciacomprobatoria.model';

@Component({
  selector: 'app-evidenciacomprobatoria',
  templateUrl: './evidenciacomprobatoria.component.html',
  styleUrls: ['./evidenciacomprobatoria.component.css']
})
export class EvidenciacomprobatoriaComponent implements OnInit {
  evidenciascomprobatorias: any;
  evidenciacomprobatoria: EvidenciacomprobatoriaModel[]=[];
 

  constructor(private evidenciacomprobatoriaService: EvidenciacomprobatoriaService) {

  }

  ngOnInit(): void {
    this.listadoevidenciascomprobatorias();
  }

  listadoevidenciascomprobatorias(){
    this.evidenciacomprobatoriaService.getEvidenciascomprobatorias()
    .subscribe((res:any)=>{
      this.evidenciascomprobatorias = res.data;
      console.log(this.evidenciascomprobatorias);
      console.log(res);
    },(err)=>{
      console.log(err);
    }
    );
  }

}
