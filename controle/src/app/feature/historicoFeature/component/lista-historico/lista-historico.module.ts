import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaHistoricoComponent } from './lista-historico.component';




@NgModule({
  declarations: [
    ListaHistoricoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaHistoricoComponent
  ]
})
export class ListaHistoricoModule { }
