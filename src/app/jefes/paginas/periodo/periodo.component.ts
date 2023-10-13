import { Component, OnInit } from '@angular/core';
import { PeriodoService } from '../../services/periodo.service';
import { PeriodoModel } from 'src/app/models/periodo.model';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PeriodoInterface } from '../../interfaces/periodo.interface';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit{
  periodos: PeriodoModel[]=[];
  router: any;
  ActivatedRoute:any;
  periodo:any;
  
  constructor(private periodoService: PeriodoService){
     
  }
  ngOnInit(): void {
   this.listadoperiodos();
  }

  listadoperiodos(){
    this.periodoService.getPeriodos()
    .subscribe((res:any)=>{
      this.periodos=res.data;
      console.log(this.periodos);
      console.log(res.data);

    },(err)=>{
      console.log(err);
    }
    );
  }

  eliminar(){
    this.periodoService.deleteperiodo(this.periodo).subscribe(
      res=>{
        console.log("entro");
        Swal.fire({
          title:'Periodo eliminado',
          icon: 'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/periodos/listadoPeriodos']);
      },
      err=>{
        Swal.fire({
          title:'periodo no eliminado',
          icon: 'error',
          confirmButtonText:'OK'
        });
      }
    );

  }



/*
periodo:  PeriodoModel [] = [];
  //router: any;
  activatedRoute: any;
  
  constructor( private periodoService: PeriodoService, private router: Router){
  }

  ngOnInit(): void{
      this.listadoperiodo();
       }

   listadoperiodo(){
    this.periodoService.getPeriodos()
    .subscribe((res: any) => {
      this.periodo = res.data;
      console.log(this.periodo);
      console.log(res);
    },
    (err)=>{
      console.log(err);
    }
    );
*/





    //this.periodoService.getPeriodos();


   //}


}

/*ngOnInit(): void{
  
}*/


  

/*
  this.editarperiodo.putPeriodo.id(this.periodos).subscribe(
    res => {
      Swal.fire({
        title: 'Periodo actualizado',
        icon: 'success',
        confirmButtonText:'ok'
      });
      this.router.navigate(['/periodo/listaperiodos']);
    },

    err =>{
      Swal.fire({
        title: 'Periodo no actualizado',
        icon: 'error',
        confirmButtonText:'ok'
      });

    }

  ); 
  }
  */


