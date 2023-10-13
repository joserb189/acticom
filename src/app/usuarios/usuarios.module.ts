import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
  ],
  
})
export class UsuariosModule { }
