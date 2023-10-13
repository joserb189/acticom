import { Component, OnInit } from '@angular/core';
import { DepartamentoClase } from '../../interfaces/departamentos.interface';
import { DepartamentoService } from '../../services/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregardepartamento',
  templateUrl: './agregardepartamento.component.html',
  styleUrls: ['./agregardepartamento.component.css']
})
export class AgregardepartamentoComponent implements OnInit {
  ngModel:any;
  formulario:any;
  ngForm:any;

  model={
    id:'number',
    nombre:'string'
  }
  departamento = new DepartamentoClase();

  constructor(private _ds: DepartamentoService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }
  ngOnInit(): void {
    
  }

  agregar(){
    this.departamento.id;
    this._ds.postDepartamentos(this.departamento).subscribe(
      res => {
        Swal.fire({
          title:'Se agrego',
          text:'Departamento agregada',
          icon:'success'
        });
        this.router.navigate(['/jefes/departamento']);
      },
      err=>
      Swal.fire({
        title:'ERROR',
        text:'Departamento no agregado',
        icon:'error'
      })
    );
  }

}
