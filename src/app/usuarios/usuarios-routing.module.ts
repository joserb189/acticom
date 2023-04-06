import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        component: UsuarioComponent
      },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild ( routes )
  ],
  
  exports: [
    RouterModule
  ]

})
export class UsuariosRoutingModule { }
