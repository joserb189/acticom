import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvidenciapresentarModel } from 'src/app/models/evidenciapresentar.model';


const url= "http://localhost:8080/evidenciapresentar";

@Injectable({
  providedIn: 'root'
})
export class EvidenciapresentarService {

  headerT=new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  getevidenciapresentar(){
    return this.http.get<any[]>('http://localhost:8080/evidenciapresentar');
  }

  getEvidenciapresentar(id:string){
    return this.http.get<any[]>(`${url}/${id}`);
  }

  putEvidenciapresentar(evidenciapresentar:EvidenciapresentarModel):Observable<EvidenciapresentarModel>{
    return this.http.put<EvidenciapresentarModel>(`${url}/${evidenciapresentar.id}`,evidenciapresentar, {headers:this.headerT});
  }

  deleteevidenciapresentar(evidenciapresentar:EvidenciapresentarModel):Observable<any>{
    return this.http.delete(`${url}/${evidenciapresentar}`);
  }

  postevidenciapresentar(evidenciapresentar:EvidenciapresentarModel):Observable<EvidenciapresentarModel>{
    return this.http.post<EvidenciapresentarModel>(`${url}`,evidenciapresentar,{headers:this.headerT});
  }


  
}
