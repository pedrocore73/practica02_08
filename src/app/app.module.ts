import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TopScoreComponent } from './top-score/top-score.component';
import { PuntosPipe } from './pipes/puntos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorComponent,
    JugadoresComponent,
    TopScoreComponent,
    PuntosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
