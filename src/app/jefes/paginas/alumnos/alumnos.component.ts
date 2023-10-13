import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { AlumnoModel } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  alumnos : AlumnoModel [] = [];
  private _as: any;
  router: any;
  activatedRoute: any;
  res:any;
  
  
  constructor( private alumnosService: AlumnosService){

}
  ngOnInit(): void {
    this.listadoalumnos();
  }

  listadoalumnos(){

    this.alumnosService.getAlumnos()
    .subscribe((res: any) => {
      this.alumnos = res.data;
      console.log(this.alumnos);
      console.log(res);
    },(err)=>{
      console.log(err);
    }
    );
    //this.periodoService.getPeriodos();


   //}

  }

  
  

}