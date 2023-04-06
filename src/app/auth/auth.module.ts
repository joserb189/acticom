import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './paginas/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistroComponent } from './paginas/registro/registro.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
    
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    
    
  ],
  
  
})
export class AuthModule { }
