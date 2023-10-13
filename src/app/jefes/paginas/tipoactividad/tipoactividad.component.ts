import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoactividadModel } from 'src/app/models/tipoactividad.model';
import { TipoactividadService } from '../../services/tipoactividad.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tipoactividad',
  templateUrl: './tipoactividad.component.html',
  styleUrls: ['./tipoactividad.component.css']
})
export class TipoactividadComponent implements OnInit {
  
tipoact : TipoactividadModel []=[];
  //Tipoact: any []=[];
  Tipoact: any[]=[];
  router:any;
  ActivatedRoute: any;
  
  
  
  //err:any
  
  //TipoactividadService: any;
 
  constructor(private TipoactividadService: TipoactividadService){
   
}
  ngOnInit(): void {
    this.listadotipoact();
  }
  listadotipoact() {
    this.TipoactividadService.getTipoact()
    .subscribe((res: any) => {
      this.tipoact = res.data;
      console.log(this.tipoact);
      console.log(res);
    },(err: any)=>{
      console.log(err);
    }
    );
    
    
  }

  eliminar(){
    this.TipoactividadService.deletetipoact(this.tipoact).subscribe(
      res=>{
        Swal.fire({
          title: 'Tipo actividad eliminado',
          icon : 'success',
          confirmButtonText:'OK'
        });
        this.router.navigate(['/tipoact/listadotipoact']);
      },
      err=>{
        Swal.fire({
          title:'Tipo actividad no eliminado',
          icon: 'error',
          confirmButtonText:'OK'
        });
      }
    );
  }

}

 