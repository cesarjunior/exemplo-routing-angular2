import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';
import { TipoClienteComponent } from './tipo-cliente/tipo-cliente.component';

const routes: Routes = [
  { path: '', component: CadastrosComponent, children: [
    { path: 'tipo-cliente', component: TipoClienteComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
