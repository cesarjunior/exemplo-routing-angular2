import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { TipoClienteComponent } from './tipo-cliente/tipo-cliente.component';
import { CadastrosComponent } from './cadastros.component';

@NgModule({
  imports: [
    CommonModule,
    CadastrosRoutingModule
  ],
  declarations: [
    CadastrosComponent,
    TipoClienteComponent
  ]
})
export class CadastrosModule { }
