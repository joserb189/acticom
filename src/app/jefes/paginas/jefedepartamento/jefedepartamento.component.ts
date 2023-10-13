import { Component, OnInit } from '@angular/core';
import { JefedepartamentoService } from '../../services/jefedepartamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jefedepartamento',
  templateUrl: './jefedepartamento.component.html',
  styleUrls: ['./jefedepartamento.component.css']
})
export class JefedepartamentoComponent implements OnInit{
  jefedepartamento: any[]=[];

  constructor(private _js: JefedepartamentoService) {
    this._js.getjefes().subscribe(
      res =>{
        this.jefedepartamento = res.data;
        console.log(res.data);
      }

    );
  }

 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  eliminar(){
    
  }
 

}
