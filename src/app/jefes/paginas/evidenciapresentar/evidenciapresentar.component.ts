import { Component, OnInit } from '@angular/core';
import { EvidenciapresentarModel } from 'src/app/models/evidenciapresentar.model';
import { EvidenciapresentarService } from '../../services/evidenciapresentar.service';

@Component({
  selector: 'app-evidenciapresentar',
  templateUrl: './evidenciapresentar.component.html',
  styleUrls: ['./evidenciapresentar.component.css']
})
export class EvidenciapresentarComponent implements OnInit {
  evidenciapresentar: EvidenciapresentarModel []=[];

  constructor(private EvidenciapresentarService: EvidenciapresentarService){

  }

  ngOnInit(): void {
    this.listadoevidenciapresentar();
     }

     listadoevidenciapresentar(){
      this.EvidenciapresentarService.getevidenciapresentar()
      .subscribe((res:any)=>{
        this.evidenciapresentar = res.data;
        console.log(this.evidenciapresentar);
        console.log(res);

      },(err:any)=>{
        console.log(err);
      }
      );
     }

}
