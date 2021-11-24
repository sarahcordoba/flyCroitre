import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assets/navbar/navbar.component';
import { FooterComponent } from './assets/footer/footer.component';
import { IndexComponent } from './assets/index/index.component';
import { ErrorComponent } from './assets/error/error.component';
import { CreateComponent } from './modulos/aeropuertos/create/create.component';
import { EditComponent } from './modulos/aeropuertos/edit/edit.component';
import { GetComponent } from './modulos/aeropuertos/get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent,
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
