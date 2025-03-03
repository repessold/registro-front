import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { NovoRegistroComponent } from './novo-registro/novo-registro.component';
import { SharedModule } from 'src/assets/shared/shared.module';


@NgModule({
  declarations: [
    NovoRegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule

  ]
})
export class RegistroModule { }
