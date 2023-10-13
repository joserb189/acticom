import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JefedepartamentoModel} from 'src/app/models/jefedepartamento.model';
import { JefedepartamentoInterface } from '../interfaces/jefedepartamento.interface';

const url = "http://localhost:8080/jefes";
@Injectable({
  providedIn: 'root'
})
export class JefedepartamentoService {
  
  headerT = new HttpHeaders().set('Content-Type', 'application/json');
  putJefedepartamento: any;
  putJefes: any;
  constructor(private http: HttpClient){}

  getjefes(): Observable<any>{
    return this.http.get<any[]>('http://localhost:8080/jefes');
  }

  getjefe(rfc: string) {
    return this.http.get<any[]>(`${url}/${rfc}`);
  }

  putjefes (jefe: JefedepartamentoModel): Observable<JefedepartamentoModel>{
    return this.http.put<JefedepartamentoModel>(`${url}/${jefe.rfc}`,jefe,{headers: this.headerT});

  }

  deletejefe (rfc:any): Observable<any>{
    return this.http.delete(`${url}/${rfc}`);

  }
  

  postJefes(jefe: JefedepartamentoInterface): Observable<JefedepartamentoInterface>{
    return this.http.post<JefedepartamentoInterface>(`${url}`,jefe,{headers: this.headerT});
  }

  validaRfc (rfc:any):Observable<any>{
    return this.http.get(`${url}/validaRFC/${rfc}`);
  }
 
}
