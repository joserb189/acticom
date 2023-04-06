import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        FooterComponent,
        HeaderComponent,
       
       
      
    ],
    providers: [],

    bootstrap: [AppComponent
    ],

    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
        
    ],
})
export class AppModule { }
