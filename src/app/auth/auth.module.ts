import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './paginas/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginjefeComponent } from './paginas/loginjefe/loginjefe.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    LoginjefeComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     
    
    
    
  ],
  
  
})
export class AuthModule { }
