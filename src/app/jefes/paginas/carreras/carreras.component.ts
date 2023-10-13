import { Component, OnInit } from '@angular/core';
import { CarreraInterface } from '../../interfaces/carreras.interface';
import { CarreraModel } from 'src/app/models/carreras.model';
import Swal from 'sweetalert2';
import { CarrerasService } from '../../services/carreras.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  carreras : CarreraModel [] = [];
  private _cs: any;
  router: any;
  activatedRoute: any;
  res:any;
  


 
  constructor(private CarrerasService: CarrerasService){
  }

  ngOnInit(): void {
    this.listadocarrera();
  }

  listadocarrera(){
    this.CarrerasService.getCarreras()
    .subscribe((res: any) => {
      this.carreras = res.data;
      console.log(this.carreras);
      console.log(res);
    },(err)=>{
      console.log(err);
    }
    );
  }
  eliminar(){
    this.CarrerasService.deleteCarreras(this.carreras).subscribe(
     /* res=>{
        Swal.fire({
          title:'Carrera eliminado',
          icon: 'success',
          confirmButtonText:'OK'
        });
        
      },
      */
     /*
      err=>{
        Swal.fire({
          title:'Carrera no eliminado',
          icon:'error',
          confirmButtonText:'ok'
        });
      }
      */
    );
  }
  

}
