import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';

import { JefesRoutingModule } from './jefes-routing.module';
import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PeriodoComponent } from './paginas/periodo/periodo.component';
import { AcreditacionesComponent } from './paginas/acreditaciones/acreditaciones.component';
import { ExtraescolaresComponent } from './paginas/extraescolares/extraescolares.component';
import { CarrerasComponent } from './paginas/carreras/carreras.component';
import { ActividadescomplementariasComponent } from './paginas/actividadescomplementarias/actividadescomplementarias.component';
import { EditaralumnoComponent } from './paginas/editaralumno/editaralumno.component';
import { AgregarcarreraComponent } from './paginas/agregarcarrera/agregarcarrera.component';
import { AgregarextraescolarComponent } from './paginas/agregarextraescolar/agregarextraescolar.component';
import { AgregarperiodoComponent } from './paginas/agregarperiodo/agregarperiodo.component';
import { AgregarextraescolaresComponent } from './paginas/agregarextraescolares/agregarextraescolares.component';
import { AlumnosComponent } from './paginas/alumnos/alumnos.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    
    JefedepartamentoComponent,
    InicioComponent,
    AgregarComponent,
    PeriodoComponent,
    AcreditacionesComponent,
    ExtraescolaresComponent,
    CarrerasComponent,
    ActividadescomplementariasComponent,
    EditaralumnoComponent,
    AgregarcarreraComponent,
    AgregarextraescolarComponent,
    AgregarperiodoComponent,
    AgregarextraescolaresComponent,
    AlumnosComponent,
   
   
    
    
    
  ],
  imports: [
    CommonModule,
    JefesRoutingModule,
    
  ]
 
})
export class JefesModule { }
