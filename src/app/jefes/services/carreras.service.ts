import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarreraInterface } from '../interfaces/carreras.interface';
import { CarreraModel } from 'src/app/models/carreras.model';

const url = "http://localhost:8080/carreras";
@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
 
  
  deleteCarreras: any;
  
  /*
  putCarrera(carrera: CarreraClase) {
    throw new Error('Method not implemented.');
  }
  */
  

  headerT = new HttpHeaders().set('Content-type', 'application/json');
  
  //postcarrera: any;
  //httpClient: any;
  //url: any;


  constructor(private http : HttpClient) { }
  getCarreras(){
    return this.http.get<any[]>('http://localhost:8080/carreras');

  }

  getCarrera(id: string) {
    return this.http.get<any[]>(`${url}/${id}`);
  }

  putCarreras(carrera: CarreraModel): Observable<CarreraModel>{
    return this.http.put<CarreraModel>(`${url}/${carrera.id}`,carrera,{headers: this.headerT})
  }

  deleteCarrera (id:any): Observable<any> {
    return this.http.delete(`${url}/${id}`);

  }

  postCarreras (carrera: CarreraInterface): Observable<CarreraInterface>{
    return this.http.post<CarreraInterface>(`${url}`,carrera,{headers:this.headerT});
  } 
/*
  editar (id:string) :Observable<any> {
    return this.http.put<any[]>(`${url}/${id}`);
  }
  */
}

/*
editar(carrera: Carreras): Observable<Carreras>{
  return this.http.post<Carrera>(`${this.url}`)
  
}
*/
