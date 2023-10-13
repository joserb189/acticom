import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActividadcomplementariaComponent } from './paginas/actividadcomplementaria/actividadcomplementaria.component';
import { InicioalumnoComponent } from './paginas/inicioalumno/inicioalumno.component';
import { TipoactividadComponent } from './paginas/tipoactividad/tipoactividad.component';
import { CarreraComponent } from './paginas/carrera/carrera.component';
import { EnvioevidenciasComponent } from './paginas/envioevidencias/envioevidencias.component';
import { MenuactividadesComponent } from './paginas/menuactividades/menuactividades.component';
import { EditarevidenciasComponent } from './paginas/editarevidencias/editarevidencias.component';
import { EvidenciapresentarComponent } from './paginas/evidenciapresentar/evidenciapresentar.component';

const routes: Routes = [

  
  
  {
    path: '',
    component: InicioalumnoComponent,
    children: [
     
      {
        path: 'actividadcomplementaria', component: ActividadcomplementariaComponent
      },

      

      {
        path: 'menuactividades', component: MenuactividadesComponent
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
        path: 'editarevidencias', component: EditarevidenciasComponent
      },

      {
        path: 'evidenciapresentar', component: EvidenciapresentarComponent
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
