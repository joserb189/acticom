import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoInterface } from '../interfaces/alumnos.interface';

const url = "http://localhost:8080/alumnos";
@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  [x: string]: any;

  no_control:any;

  headerT = new HttpHeaders().set('Content-Type', 'application./json');

  constructor( private http: HttpClient) { }

  getAlumnos(){
    return this.http.get<any[]>('http://localhost:8080/alumnos');

  }
/*
  getAlumno(no_control:any): Observable<any>{
    return this.http.get<any[]>('http://localhost:8080/alumnos/no_control');
  }
*/
  getAlumno(no_control: string) {
    return this.http.get<any[]>(`${url}/${no_control}`);
  }

  postAlumnos (alumno: AlumnoInterface): Observable<AlumnoInterface>{
    return this.http.post<AlumnoInterface>(`${url}`,alumno,{headers:this.headerT});
  }

  putAlumno(alumno: AlumnoModel): Observable<AlumnoModel>{
    return this.http.put<AlumnoModel>(`${url}/${alumno.no_control}`, alumno, {headers:this.headerT});

  }

  deleteAlumno(no_control:any):Observable<any>{
    return this.http.delete(`${url}/${no_control}`);
  }

  
  
}
