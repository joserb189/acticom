import { Component, OnInit } from '@angular/core';
import { TipoactividadModel } from 'src/app/models/tipoactividad.model';
import { TipoactClase } from '../../interfaces/tipoact.interface';
import { TipoactividadService } from '../../services/tipoactividad.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregartipo',
  templateUrl: './agregartipo.component.html',
  styleUrls: ['./agregartipo.component.css']
})
export class AgregartipoComponent implements OnInit {
  ngModule: any;
  formulario: any;
  ngForm:any;

  model={
    max_creditos:'number',
    nombre:'string',
    id:'number',
  }
  id:any;
  tipoact = new TipoactClase();
  constructor(private _ts: TipoactividadService,
    private ar: ActivatedRoute,
    private router: Router){

    }
  ngOnInit(): void {
  }

  agregar(){
    this.tipoact.id;
    this._ts.posttipoact(this.tipoact).subscribe(
      res =>{
        Swal.fire({
          title:'Se agrego',
          text:'Tipo de actividad agregada',
          icon:'success'
        });
        this.router.navigate(['/jefes/tipoactividad']);
      },
      err=>
      Swal.fire({
        title:'ERROR',
        text:'Tipo de actividad no agregado',
        icon:'error'
      })
    );
  }

}
