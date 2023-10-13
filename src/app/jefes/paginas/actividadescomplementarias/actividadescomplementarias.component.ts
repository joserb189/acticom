import { Component, OnInit  } from '@angular/core';
import { ActicomplementariasService } from '../../services/acticomplementarias.service';
import { ActividadescomplementariasModel } from 'src/app/models/actividadescomplementarias.model';

@Component({
  selector: 'app-actividadescomplementarias',
  templateUrl: './actividadescomplementarias.component.html',
  styleUrls: ['./actividadescomplementarias.component.css']
})
export class ActividadescomplementariasComponent implements OnInit {
  actcomplementarias:  ActividadescomplementariasModel[]=[];
  private _as: any;
  router: any;
  activatedRoute: any;

  constructor(private acticomplementariasService: ActicomplementariasService){
    
  }

  ngOnInit() {
    this.listadoactcomplementarias()
  }

  listadoactcomplementarias(){

    this.acticomplementariasService.getActcomplementarias()
    .subscribe((res: any) => {
      this.actcomplementarias = res.data;
      console.log(this.actcomplementarias);
      console.log(res);
    },(err)=>{
      console.log(err);
    }
    );

  }
  


}
