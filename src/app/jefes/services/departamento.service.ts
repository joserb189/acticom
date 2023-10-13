import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departamentoModel } from 'src/app/models/departamento.model';
import { DepartamentoInterface } from '../interfaces/departamentos.interface';

const url= "http://localhost:8080/departamentos";
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  
  headerT= new HttpHeaders().set('Content-Type','application/json');
  

  constructor(private http:HttpClient) { }

  getdepartamentos(){
    return this.http.get<any[]>('http://localhost:8080/departamentos');
  }

  getdepartamento(id:string){
    return this.http.get<any[]>(`${url}/${id}`);
  }

  putDepartamento (departamento: departamentoModel): Observable<departamentoModel>{
    return this.http.put<departamentoModel>(`${url}/${departamento.id}`,departamento,{headers: this.headerT});

  }

  deleteDepartamento (id:any): Observable<any>{
    return this.http.delete(`${url}/${id}`);

  }
  

  postDepartamentos(departamento: DepartamentoInterface): Observable<DepartamentoInterface>{
    return this.http.post<DepartamentoInterface>(`${url}`,departamento,{headers:this.headerT});
  }


}



/*getAlumno(no_control: string) {
  return this.http.get<any[]>(`${url}/${no_control}`);
}
*/