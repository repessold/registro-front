import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoRegistroComponent } from './novo-registro/novo-registro.component';
import { GraficoComponent } from './grafico/grafico.component';

const routes: Routes = [
  {
    path: '',
    component: NovoRegistroComponent
  },
  {
    path: 'grafico',
    component: GraficoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
