import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/paginas/login/login.component';
import { RegistroComponent } from './auth/paginas/registro/registro.component';

import { JefedepartamentoComponent } from './jefes/paginas/jefedepartamento/jefedepartamento.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { UsuarioComponent } from './usuarios/paginas/usuario/usuario.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
   
  },

  {
    path: 'jefes',
    loadChildren: ()=> import('./jefes/jefes.module').then(m => m.JefesModule)
  },

  {
    path: 'usuarios',
    loadChildren: ()=> import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },

  {
    path: 'alumnos',
    loadChildren: ()=> import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },

 
  {
    path: 'usuario',
    component: UsuarioComponent
  },

  
  
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'registro',
    component: RegistroComponent
  },
  
  {
    path: '**',
     redirectTo: 'usuario'
  }
  
 
  
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
