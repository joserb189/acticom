import { Component, OnInit } from '@angular/core';
import { PeriodoModel } from 'src/app/models/periodo.model';
import { PeriodoClase } from '../../interfaces/periodo.interface';
import { PeriodoService } from '../../services/periodo.service';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarperiodo',
  templateUrl: './agregarperiodo.component.html',
  styleUrls: ['./agregarperiodo.component.css']
})
export class AgregarperiodoComponent implements OnInit {
  ngModel:any;
  formulario:any;
  ngForm:any;

  model={
    status:'number',
    anio:'number',
    mes_ini:'string',
    mes_fin:'string',
    id:'number',
  }
  id:any;

  periodo =new PeriodoClase();
  constructor(private _ps: PeriodoService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }


  ngOnInit(): void {
    
  }

  agregar(){
    this.periodo.id;
    this._ps.postperiodo(this.periodo).subscribe(
      res =>{
        Swal.fire({
          title:'Se agrego',
          text:'Periodo agregado',
          icon: 'success'
          
        });
        this.router.navigate(['/jefes/periodo']);
      },
      err=>
      Swal.fire({
        title:'Error',
        text:'Periodo no Agregado',
        icon:'error'
      })
    );
  }
}
