import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JefesRoutingModule } from './jefes-routing.module';
import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PeriodoComponent } from './paginas/periodo/periodo.component';
import { ExtraescolaresComponent } from './paginas/extraescolares/extraescolares.component';
import { CarrerasComponent } from './paginas/carreras/carreras.component';
import { ActividadescomplementariasComponent } from './paginas/actividadescomplementarias/actividadescomplementarias.component';
import { EditaralumnoComponent } from './paginas/editaralumno/editaralumno.component';
import { AgregarextraescolarComponent } from './paginas/agregarextraescolar/agregarextraescolar.component';
import { AgregarperiodoComponent } from './paginas/agregarperiodo/agregarperiodo.component';
import { AlumnosComponent } from './paginas/alumnos/alumnos.component';
import { EditarcomplementariaComponent } from './paginas/editarcomplementaria/editarcomplementaria.component';
import { EditarperiodoComponent } from './paginas/editarperiodo/editarperiodo.component';
import { DepartamentoComponent } from './paginas/departamento/departamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarcarreraComponent } from './paginas/editarcarrera/editarcarrera.component';
import { TipoactividadComponent } from './paginas/tipoactividad/tipoactividad.component';
import { EditartipoactComponent } from './paginas/editartipoact/editartipoact.component';
import { AlumnoModel } from '../models/alumno.model';
import { EditarjefedepComponent } from './paginas/editarjefedep/editarjefedep.component';
import { EditardepartamentoComponent } from './paginas/editardepartamento/editardepartamento.component';
import { AgregarcarreraComponent } from './paginas/agregarcarrera/agregarcarrera.component';
import { AgregaractividadesComponent } from './paginas/agregaractividades/agregaractividades.component';
import { AgregardepartamentoComponent } from './paginas/agregardepartamento/agregardepartamento.component';
import { AgregartipoComponent } from './paginas/agregartipo/agregartipo.component';
import { AgregarjefeComponent } from './paginas/agregarjefe/agregarjefe.component';
import { AgregaralumnoComponent } from './paginas/agregaralumno/agregaralumno.component';
import { RejefeComponent } from './paginas/rejefe/rejefe.component';
import { SolicitudComponent } from './paginas/solicitud/solicitud.component';
import { EvidenciacomprobatoriaComponent } from './paginas/evidenciacomprobatoria/evidenciacomprobatoria.component';
import { EvidenciapresentarComponent } from './paginas/evidenciapresentar/evidenciapresentar.component';
import { AgregarevcomprobatoriaComponent } from './paginas/agregarevcomprobatoria/agregarevcomprobatoria.component';
import { EditarcomprobatoriasComponent } from './paginas/editarcomprobatorias/editarcomprobatorias.component';
import { EditarevipresentarComponent } from './paginas/editarevipresentar/editarevipresentar.component';
import { AgregarevipresentarComponent } from './paginas/agregarevipresentar/agregarevipresentar.component';
import { AgregarcomprobatoriaComponent } from './paginas/agregarcomprobatoria/agregarcomprobatoria.component';
import { CrearsolicitudComponent } from './paginas/crearsolicitud/crearsolicitud.component';
import { EditsolicitudComponent } from './paginas/editsolicitud/editsolicitud.component';


@NgModule({
  declarations: [
    JefedepartamentoComponent,
    InicioComponent,
    PeriodoComponent,
    
    
    CarrerasComponent,
    ActividadescomplementariasComponent,
    EditaralumnoComponent,
   
    AgregarextraescolarComponent,
    AgregarperiodoComponent,
    AgregarcarreraComponent,
    AgregaractividadesComponent,
    AgregardepartamentoComponent,
    AgregartipoComponent,
    AgregarjefeComponent,
    AgregaralumnoComponent,
    AlumnosComponent,
    ExtraescolaresComponent,
    EditarcomplementariaComponent,
    EditarperiodoComponent,
    DepartamentoComponent,
    TipoactividadComponent,
    EditartipoactComponent,
    EditarcarreraComponent,
    EditarjefedepComponent,
    EditardepartamentoComponent,
    RejefeComponent,
    SolicitudComponent,
    
    EvidenciapresentarComponent,
    
    AgregarevcomprobatoriaComponent,
    EvidenciacomprobatoriaComponent,
    EditarcomprobatoriasComponent,
    EditarevipresentarComponent,
    AgregarevipresentarComponent,
    AgregarcomprobatoriaComponent,
    CrearsolicitudComponent,
    EditsolicitudComponent
   

       
  ],
  imports: [
    CommonModule,
    JefesRoutingModule,
     FormsModule,
     ReactiveFormsModule
  ],
  exports:[
    
  ]
 
})
export class JefesModule { }
