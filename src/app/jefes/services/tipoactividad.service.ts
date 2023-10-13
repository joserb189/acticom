import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoactividadModel } from 'src/app/models/tipoactividad.model';


const url = "http://localhost:8080/tipoact";

@Injectable({
  providedIn: 'root'
})
export class TipoactividadService {
  
   //url = "http://localhost:8080/tipoact";
  
  headerT = new HttpHeaders().set('Content-Type', 'application/json');
  

  constructor( private http: HttpClient) { }
  
  getTipoact() {
    return this.http.get<any[]>('http://localhost:8080/tipoact');
  }
  gettipoact(id:string){
    return this.http.get<any[]>(`${url}/${id}`);
  }

  puttipoact(tipoactividad:TipoactividadModel):Observable<TipoactividadModel>{
    return this.http.put<TipoactividadModel>(`${url}/${tipoactividad.id}`,tipoactividad,{headers:this.headerT});

  }

  deletetipoact(id:any):Observable<any>{
    return this.http.delete(`${url}/${id}`);
  }

  posttipoact (tipoactividad: TipoactividadModel):Observable<TipoactividadModel>{
    return this.http.post<TipoactividadModel>(`${url}`,tipoactividad,{headers:this.headerT});
  }

  //getTipoact():Observable<any>{
  //return this.http.get('http://localhost:8080/tipoact');
}

//gettipoact(id:string){
  //return this.http.get<any[]>(`${url}/${id}`);

//}

/*
getAlumno(no_control: string) {
  return this.http.get<any[]>(`${url}/${no_control}`);
}
*/