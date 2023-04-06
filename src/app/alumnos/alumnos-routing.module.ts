import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActividadcomplementariaComponent } from './paginas/actividadcomplementaria/actividadcomplementaria.component';
import { InicioalumnoComponent } from './paginas/inicioalumno/inicioalumno.component';
import { EvidenciapresencialComponent } from './paginas/evidenciapresencial/evidenciapresencial.component';
import { TipoactividadComponent } from './paginas/tipoactividad/tipoactividad.component';
import { EvidenciasenviadasComponent } from './paginas/evidenciasenviadas/evidenciasenviadas.component';
import { CarreraComponent } from './paginas/carrera/carrera.component';
import { EnvioevidenciasComponent } from './paginas/envioevidencias/envioevidencias.component';
import { MenuactividadesComponent } from './paginas/menuactividades/menuactividades.component';

const routes: Routes = [

  
  
  {
    path: '',
    component: InicioalumnoComponent,
    children: [
     
      {
        path: 'actividadcomplementaria', component: ActividadcomplementariaComponent
      },

      {
        path: 'evidenciapresencial', component: EvidenciapresencialComponent
      },

      {
        path: 'menuactividades', component: MenuactividadesComponent
      },

      {
        path: 'evidenciasenviadas', component: EvidenciasenviadasComponent
      },

      {
        path: 'carrera', component: CarreraComponent
      },

      {
        path: 'tipoactividad', component: TipoactividadComponent
      },

      {
        path: 'envioevidencias', component: EnvioevidenciasComponent
      },

      
      
     
      {
        path: '**',
         redirectTo: 'menuactividades'
      }
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnosRoutingModule { }
