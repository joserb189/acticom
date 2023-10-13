import { Component, OnInit } from '@angular/core';
import { EvidenciacomprobatoriaClase } from '../../interfaces/evidenciacomprobatoria.interface';
import { EvidenciacomprobatoriaService } from '../../services/evidenciacomprobatoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarcomprobatorias',
  templateUrl: './editarcomprobatorias.component.html',
  styleUrls: ['./editarcomprobatorias.component.css']
})
export class EditarcomprobatoriasComponent implements OnInit{
  ngModel: any;
  formulario: any;
  ngForm:any;

  model={
    evd_presentar:'string',
    act_complementaria: 'string',
    id:'number',

  }
  id:any;
  evidenciascomprobatorias = new EvidenciacomprobatoriaClase();
  
  constructor(private _es: EvidenciacomprobatoriaService,
    private ar: ActivatedRoute,
     private router:Router){
      

     }

  ngOnInit(): void {
   this.id = this.ar.snapshot.paramMap.get('id');
   this.obtenerEvidenciacomprobatoria(this.id);
  }

  obtenerEvidenciacomprobatoria(id:any){
    console.log(this.id);
    this._es.getevidenciascomprobatorias(id).subscribe(
      (res:any) =>{
        this.evidenciascomprobatorias=res.data;
        console.log(this.evidenciascomprobatorias);
      }
    )
  };

  guardar(){
    this._es.putevidenciacomprobatoria(this.evidenciascomprobatorias).subscribe(
      res =>{
        Swal.fire({
          title:'Evidencia comprobatiria editado',
          icon:'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/jefes/evidenciacomprobatiria']);

      },
      err =>{
        Swal.fire({
          title:'Evidencia comprobatoria no editado',
          icon:'error',
          confirmButtonText:'OK'
        });
      }
    );
  }


}
