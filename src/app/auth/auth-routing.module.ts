import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { LoginjefeComponent } from './paginas/loginjefe/loginjefe.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  

  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'registro',
        component: RegistroComponent
      },

      {
        path: 'loginjefe',
        component: LoginjefeComponent
      },

    

      
      {
        path: '**',
        redirectTo: 'login' 
      }
    ]

  }
]
@NgModule({
  
  imports: [
    RouterModule.forChild ( routes ),
    FormsModule
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutingModule { }
