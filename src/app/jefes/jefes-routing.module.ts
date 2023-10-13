import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { JefedepartamentoComponent } from './paginas/jefedepartamento/jefedepartamento.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PeriodoComponent } from './paginas/periodo/periodo.component';
import { ExtraescolaresComponent } from './paginas/extraescolares/extraescolares.component';
import { CarrerasComponent } from './paginas/carreras/carreras.component';
import { ActividadescomplementariasComponent } from './paginas/actividadescomplementarias/actividadescomplementarias.component';
import { EditaralumnoComponent } from './paginas/editaralumno/editaralumno.component';
import { AgregarextraescolarComponent } from './paginas/agregarextraescolar/agregarextraescolar.component';
import { AgregarperiodoComponent } from './paginas/agregarperiodo/agregarperiodo.component';
import { RegistroComponent } from '../auth/paginas/registro/registro.component';
import { LoginComponent } from '../auth/paginas/login/login.component';
import { AlumnosComponent } from './paginas/alumnos/alumnos.component';
import { EditarcomplementariaComponent } from './paginas/editarcomplementaria/editarcomplementaria.component';
import { EditarperiodoComponent } from './paginas/editarperiodo/editarperiodo.component';
import { DepartamentoComponent } from './paginas/departamento/departamento.component';
import { EditarcarreraComponent } from './paginas/editarcarrera/editarcarrera.component';
import { TipoactividadComponent } from './paginas/tipoactividad/tipoactividad.component';
import { FormsModule } from '@angular/forms';
import { EditartipoactComponent } from './paginas/editartipoact/editartipoact.component';
import { EditarjefedepComponent } from './paginas/editarjefedep/editarjefedep.component';
import { EditardepartamentoComponent } from './paginas/editardepartamento/editardepartamento.component';
import { AgregarcarreraComponent } from './paginas/agregarcarrera/agregarcarrera.component';
import { AgregaractividadesComponent } from './paginas/agregaractividades/agregaractividades.component';
import { AgregarjefeComponent } from './paginas/agregarjefe/agregarjefe.component';
import { AgregardepartamentoComponent } from './paginas/agregardepartamento/agregardepartamento.component';
import { AgregartipoComponent } from './paginas/agregartipo/agregartipo.component';
import { AgregaralumnoComponent } from './paginas/agregaralumno/agregaralumno.component';
import { RejefeComponent } from './paginas/rejefe/rejefe.component';
import { SolicitudComponent } from './paginas/solicitud/solicitud.component';
import { EvidenciapresentarComponent } from './paginas/evidenciapresentar/evidenciapresentar.component';
import { EvidenciacomprobatoriaComponent } from './paginas/evidenciacomprobatoria/evidenciacomprobatoria.component';
import { AgregarevcomprobatoriaComponent } from './paginas/agregarevcomprobatoria/agregarevcomprobatoria.component';
import { EditarcomprobatoriasComponent } from './paginas/editarcomprobatorias/editarcomprobatorias.component';
import { EditarevipresentarComponent } from './paginas/editarevipresentar/editarevipresentar.component';
import { AgregarevipresentarComponent } from './paginas/agregarevipresentar/agregarevipresentar.component';
import { AgregarcomprobatoriaComponent } from './paginas/agregarcomprobatoria/agregarcomprobatoria.component';
import { CrearsolicitudComponent } from './paginas/crearsolicitud/crearsolicitud.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { EditsolicitudComponent } from './paginas/editsolicitud/editsolicitud.component';


const routes: Routes = [

  
  
  {
    path: '',
    component: InicioComponent,
    //canActivate: [AuthGuard],

    children: [
      
      {
        path: 'jefedepartamento', component: JefedepartamentoComponent
      },
      {
        path: 'alumnos', component: AlumnosComponent
      },
     
     
      {
        path: 'periodo', component: PeriodoComponent
      },
      {
        path: 'extraescolares', component: ExtraescolaresComponent
      },
      
      {
        path: 'carreras', component: CarrerasComponent
      },
      {
        path: 'actividadescomplementarias', component: ActividadescomplementariasComponent
      },
      {
        path: 'tipoactividad', component: TipoactividadComponent
      },




      {
        path: 'editaralumno', component: EditaralumnoComponent
      },
      
      {
        path: 'agregarextraescolar', component: AgregarextraescolarComponent
      },
      {
        path: 'agregarperiodo', component: AgregarperiodoComponent
      },
       {
        path: 'editarcomplementaria', component: EditarcomplementariaComponent
      },
      
      {
        path: 'editarperiodo', component: EditarperiodoComponent
      },
      {
        path: 'departamento', component: DepartamentoComponent
      },
      {
        path: 'editarcarrera', component: EditarcarreraComponent
      },
      
      {
        path: 'editartipoact', component: EditartipoactComponent
      },
      

      {
        path: 'editarperiodo/:id', component: EditarperiodoComponent
      },
      {
        path: 'editarcarrera/:id', component: EditarcarreraComponent
      },
      {
        path: 'editaralumno/:no_control', component: EditaralumnoComponent
      },
      {
        path: 'editarcomplementaria/:id', component: EditarcomplementariaComponent
      },
      
      {
        path: 'editartipoact/:id', component: EditartipoactComponent
      },
      {
        path: 'editarjefedep/:rfc', component: EditarjefedepComponent
      },
      {
        path: 'editardepartamento/:id', component: EditardepartamentoComponent
      },

      
      {
        path: 'agregarcarrera', component: AgregarcarreraComponent
      },
      {
        path: 'agregaractividades', component: AgregaractividadesComponent
      },
      {
        path: 'agregarjefe', component: AgregarjefeComponent
      },
      {
        path: 'agregardepartamento', component: AgregardepartamentoComponent
      },
      {
        path: 'agregartipo', component: AgregartipoComponent
      },
      {
        path: 'agregaralumno', component: AgregaralumnoComponent
      },

      {
        path: 'rejefe', component: RejefeComponent
      },

      {
        path: 'solicitud', component: SolicitudComponent
      },

     
      {
        path: 'evidenciapresentar', component: EvidenciapresentarComponent
      },

      {
        path: 'evidenciacomprobatoria', component: EvidenciacomprobatoriaComponent
      },
      
      {
        path: 'agregarevcomprobatoria', component: AgregarevcomprobatoriaComponent
      },

      {
        path: 'editarcomprobatorias', component: EditarcomprobatoriasComponent
      },

      {
        path: 'editarevipresentar', component: EditarevipresentarComponent
      },

      {
        path: 'agregarevipresentar', component: AgregarevipresentarComponent
      },

      {
        path: 'agregarcomprobatoria', component: AgregarcomprobatoriaComponent
      },

      {
        path: 'crearsolicitud', component: CrearsolicitudComponent
      },

      {
        path: 'editsolicitud', component: EditsolicitudComponent
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
    RouterModule.forChild(routes),
    FormsModule
    
  ],
  exports: [
    RouterModule,
    
  ]

})
export class JefesRoutingModule { }
