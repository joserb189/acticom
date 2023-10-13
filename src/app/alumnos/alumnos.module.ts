import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoactividadComponent } from './paginas/tipoactividad/tipoactividad.component';
import { ActividadcomplementariaComponent } from './paginas/actividadcomplementaria/actividadcomplementaria.component';
import { DepartamentoresponsableComponent } from './paginas/departamentoresponsable/departamentoresponsable.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { InicioalumnoComponent } from './paginas/inicioalumno/inicioalumno.component';
import { EvidenciasenviadasComponent } from './paginas/evidenciasenviadas/evidenciasenviadas.component';
import { CarreraComponent } from './paginas/carrera/carrera.component';
import { EnvioevidenciasComponent } from './paginas/envioevidencias/envioevidencias.component';
import { MenuactividadesComponent } from './paginas/menuactividades/menuactividades.component';
import { EditarevidenciasComponent } from './paginas/editarevidencias/editarevidencias.component';
import { EvidenciapresentarComponent } from './paginas/evidenciapresentar/evidenciapresentar.component';



@NgModule({
  declarations: [
    TipoactividadComponent,
    ActividadcomplementariaComponent,
    DepartamentoresponsableComponent,
    EvidenciapresentarComponent,
    InicioalumnoComponent,
    EvidenciasenviadasComponent,
    CarreraComponent,
    EnvioevidenciasComponent,
    MenuactividadesComponent,
    EditarevidenciasComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
  ]
})
export class AlumnosModule { }
