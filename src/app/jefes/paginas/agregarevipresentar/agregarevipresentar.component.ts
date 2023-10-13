import { Component, OnInit } from '@angular/core';
import { Evidenciapresentar } from '../../interfaces/evidenciapresentar.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EvidenciapresentarService } from '../../services/evidenciapresentar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarevipresentar',
  templateUrl: './agregarevipresentar.component.html',
  styleUrls: ['./agregarevipresentar.component.css']
})
export class AgregarevipresentarComponent implements OnInit {

  ngModule: any;
  formulario: any;
  ngForm:any;

  model={
    descripcion:'string',
    id:'number',
  }
  id:any;
  evidenciapresentar = new Evidenciapresentar();
  constructor(private _es: EvidenciapresentarService,
    private ar: ActivatedRoute,
    private router: Router){
      
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregar(){
    this.evidenciapresentar.id;
    this._es.postevidenciapresentar(this.evidenciapresentar).subscribe(
      res =>{
        Swal.fire({
          title:'Se agrego',
          text:'Evidencia a presentar agregado',
          icon:'success',
        });
        this.router.navigate(['/jefes/evidenciapresentar']);
      },
      err=>
      Swal.fire({
        title:'ERROR',
        text:'Evidencia a presentar no agregado',
        icon:'error'
      })
    );
  }

}
