import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActividadescomplementariasModel } from 'src/app/models/actividadescomplementarias.model';
import { ActicomplementariaInterface } from '../interfaces/acticomplementarias.interface';


const url = "http://localhost:8080/actcomplementarias";

@Injectable({
  providedIn: 'root'
})
export class ActicomplementariasService {
  id: any;
  deleteActividadescomplementarias: any;
  //putActcomplementarias: any;
  
  getactcomplementaria(id: any) {
    throw new Error('Method not implemented.');
  }

   //url = "http://localhost:8080/actcomplementarias";

  headerT = new HttpHeaders().set('Content-Type', 'application./json');

  constructor( private http: HttpClient) { }

  getActcomplementarias(): Observable<any> {
    
    return this.http.get<any[]>('http://localhost:8080/actcomplementarias');


  }
  getActcomplementaria (id: string) {
    return this.http.get<any[]>(`${url}/${id}`);
  }

  
  putactcomplementarias (acticomplementarias: ActicomplementariaInterface): Observable<ActicomplementariaInterface>{
    return this.http.put<ActicomplementariaInterface>(`${url}/${acticomplementarias.id}`,acticomplementarias,{headers:this.headerT});
  }

  deleteactcomplementarias (id: any): Observable<any>{
    return this.http.delete(`${url}/${id}`);
  }

  postActcomplementarias (actcomplementaria: ActividadescomplementariasModel): Observable<ActividadescomplementariasModel>{
    return this.http.post<ActividadescomplementariasModel>(`${url}`,actcomplementaria,{headers:this.headerT});
  }
  
}
