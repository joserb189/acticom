import { Component, OnInit } from '@angular/core';
import { EvidenciacomprobatoriaClase } from '../../interfaces/evidenciacomprobatoria.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EvidenciacomprobatoriaService } from '../../services/evidenciacomprobatoria.service';
import Swal from 'sweetalert2';
Swal
@Component({
  selector: 'app-agregarcomprobatoria',
  templateUrl: './agregarcomprobatoria.component.html',
  styleUrls: ['./agregarcomprobatoria.component.css']
})
export class AgregarcomprobatoriaComponent implements OnInit{
  ngModule: any;
  formulario: any;
  ngForm:any;

  model={
    evd_presentar:'number',
    act_complementaria:'number',
    id:'number'
  }

  evidenciacomprobatoria = new EvidenciacomprobatoriaClase();
  evidenciascomprobatorias: any;
  Evidenciacomprobatoria: any;
  constructor(private _es: EvidenciacomprobatoriaService,
    private ar: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    }

    agregar(){
      this.evidenciacomprobatoria.id;
      this._es.postEvidenciacomprobatoria(this.evidenciacomprobatoria).subscribe(
        res => {
          Swal.fire({
            title:'Se agrego',
            text:'Evidencia comprobatoria agregada',
            icon: 'success',
          });
          this.router.navigate(['/jefes/evidenciacomprobatoria']);
        },
        err=>
        Swal.fire({
          title: 'ERROR',
          text:'Evidencia comprobatoria no agregado',
          icon:'error',
        })
      );
    }
}
