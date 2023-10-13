import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvidenciacomprobatoriaModel } from 'src/app/models/evidenciacomprobatoria.model';
import { EvidenciacomprobatoriaInterface } from '../interfaces/evidenciacomprobatoria.interface';

const url = "http://localhost:8080/evidenciascomprobatorias";
@Injectable({
  providedIn: 'root'
})
export class EvidenciacomprobatoriaService {
  postEvidenciascomprobatorias: any;
  postevidenciacomprobatoria: any;
  getEvidenciacomprobatoria: any;
  getevidenciacomprobatoria(id: any) {
    throw new Error('Method not implemented.');
  }

  headerT = new HttpHeaders().set('Content-Type', 'application/json');
  putEvidenciacomprobatoria:any;
  //getevidenciascomprobatorias: any;

  constructor( private http: HttpClient) { }

  getEvidenciascomprobatorias(){
    return this.http.get<any[]>('http://localhost:8080/evidenciacomprobatoria');
  }

  getevidenciascomprobatorias(id: string){
    return this.http.get<any[]>(`${url}/${id}`);
  }

  putevidenciacomprobatoria(evidenciacomprobatoria: EvidenciacomprobatoriaInterface): Observable<EvidenciacomprobatoriaInterface>{
    return this.http.put<EvidenciacomprobatoriaInterface>(`${url}/${evidenciacomprobatoria.id}`,evidenciacomprobatoria,{headers:this.headerT});
  }

  deleteevidenciacomprobatoria(evidenciacomprobatoria:EvidenciacomprobatoriaModel): Observable<any>{
    return this.http.delete(`${url}/${evidenciacomprobatoria}`);
  }

  postEvidenciacomprobatoria(evidenciacomprobatoria: EvidenciacomprobatoriaInterface): Observable<EvidenciacomprobatoriaInterface>{
    return this.http.post<EvidenciacomprobatoriaInterface>(`${url}`,evidenciacomprobatoria,{headers: this.headerT});
  }

  //putevidenciacomprobatoria(evidenciacomprobatoria: EvidenciacomprobatoriaModel):Observable<EvidenciacomprobatoriaModel>
}
