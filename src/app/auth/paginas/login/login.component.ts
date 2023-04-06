import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { jefedepartamento } from '../../../jefes/interfaces/jefes.interfaces';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router: Router) {}

  login() {
    this.router.navigate(['./jefes']);
  }


}
