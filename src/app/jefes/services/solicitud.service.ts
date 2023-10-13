import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SolicitudModel } from 'src/app/models/solicitud.model';
import { Observable } from 'rxjs';
import { SolicitudInterface } from '../interfaces/solicitud.interface';

const url ="http://localhost:8080/solicitud";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  //[x: string]:any;
  id:any;

  headerT = new HttpHeaders().set('Content-Type', 'application./json');
  

  constructor( private http: HttpClient) { }

  getSolicitudes(){
    return this.http.get<any[]>('http://localhost:8080/solicitud');
  }

  getSolicitud(id: string){
    return this.http.get<any[]>(`${url}/${id}`);
  }

  putsolicitudes (solicitud: SolicitudInterface): Observable<SolicitudInterface>{
    return this.http.post<SolicitudInterface>(`${url}/${solicitud.id}`, solicitud, {headers: this.headerT});
  }

  deletesolicitud(id:any):Observable<any>{
    return this.http.delete(`${url}/${id}`);
  }

  postsolicitud (solicitud: SolicitudModel):Observable<SolicitudModel>{
    return this.http.post<SolicitudModel>(`${url}`,solicitud,{headers:this.headerT});
  }
}
