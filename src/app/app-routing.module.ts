import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcadorComponent } from './marcador/marcador.component';

const routes: Routes = [
  {path: '', component: MarcadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
