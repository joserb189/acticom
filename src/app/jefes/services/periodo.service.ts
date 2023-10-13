import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments.ts/environment';
import { PeriodoModel } from 'src/app/models/periodo.model';
import { PeriodoInterface } from '../interfaces/periodo.interface';

const url = 'http://localhost:8080/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  
  //url = ('http://localhost:8080/periodo');
  //public periodo : any =[]

  

 headerT = new HttpHeaders().set('Content-Type', 'application./json');
  
 
  constructor( private http: HttpClient) { }

  getPeriodos(){
    return this.http.get<any[]>('http://localhost:8080/periodo');
  }
  
  getPeriodo(id: string){
    return this.http.get<any[]>(`${url}/${id}`);
  }
    
  putPeriodo(periodo:PeriodoInterface):Observable<PeriodoInterface>{
    console.log(periodo);
    return this.http.put<PeriodoInterface>(`${url}/${periodo.id}`, periodo, { headers: this.headerT });
  }
  
  deleteperiodo(periodo:PeriodoInterface):Observable<any>{
    return this.http.delete(`${url}/${periodo}`);
  }

  postperiodo(periodo: PeriodoModel): Observable<PeriodoModel>{
    return this.http.post<PeriodoModel>(`${url}`,periodo,{ headers:this.headerT});
  }
  //putPeriodo (Periodo: PeriodoModel): Observable<PeriodoModel>
  //editarPeriodo(periodo:Periodo){
    //error err
    //return this.httpClient.put(this.url+'/periodo.id,periodo');
  }

  //putPeriodo (periodo: periodoModel):

  

 