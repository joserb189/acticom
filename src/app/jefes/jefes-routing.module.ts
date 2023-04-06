import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './paginas/agregar/agregar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PeriodoComponent } from './paginas/periodo/periodo.component';
import { ExtraescolaresComponent } from './paginas/extraescolares/extraescolares.component';
import { AcreditacionesComponent } from './paginas/acreditaciones/acreditaciones.component';
import { CarrerasComponent } from './paginas/carreras/carreras.component';
import { ActividadescomplementariasComponent } from './paginas/actividadescomplementarias/actividadescomplementarias.component';
import { EditaralumnoComponent } from './paginas/editaralumno/editaralumno.component';
import { AgregarcarreraComponent } from './paginas/agregarcarrera/agregarcarrera.component';
import { AgregarextraescolarComponent } from './paginas/agregarextraescolar/agregarextraescolar.component';
import { AgregarperiodoComponent } from './paginas/agregarperiodo/agregarperiodo.component';
import { RegistroComponent } from '../auth/paginas/registro/registro.component';
import { LoginComponent } from '../auth/paginas/login/login.component';
import { AlumnosComponent } from './paginas/alumnos/alumnos.component';


const routes: Routes = [

  
  
  {
    path: '',
    component: InicioComponent,
    children: [
     
     
      
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: 'buscar', component: BuscarComponent
      },
      {
        path: 'jefedepartamento', component: JefedepartamentoComponent
      },
      {
        path: 'alumnos', component: AlumnosComponent
      },
     
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: 'periodo', component: PeriodoComponent
      },
      {
        path: 'extraescolares', component: ExtraescolaresComponent
      },
      {
        path: 'acreditaciones', component: AcreditacionesComponent
      },
      {
        path: 'carreras', component: CarrerasComponent
      },
      {
        path: 'actividadescomplementarias', component: ActividadescomplementariasComponent
      },
      {
        path: 'editaralumno', component: EditaralumnoComponent
      },
      {
        path: 'agregarcarrera', component: AgregarcarreraComponent
      },
      {
        path: 'agregarextraescolar', component: AgregarextraescolarComponent
      },
      {
        path: 'agregarperiodo', component: AgregarperiodoComponent
      },
      
      {
        path: '**',
         redirectTo: 'inicio'
      }
    ]
  }
];

@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [
    RouterModule
  ]

})
export class JefesRoutingModule { }
