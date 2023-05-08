import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosUd33ComponentsComponent } from './ejercicios-ud33-components/ejercicios-ud33-components.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosUd33ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
