import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoComponent } from './historico.component';
import { CadastroModule } from '../../component/cadastro/cadastro.module';
import { ListaHistoricoModule } from './../../component/lista-historico/lista-historico.module';


@NgModule({
  declarations: [
    HistoricoComponent
  ],
  imports: [
    CommonModule,
    CadastroModule,
    ListaHistoricoModule
  ],
  exports: [
    CommonModule,
    CadastroModule,
    ListaHistoricoModule
  ]
})
export class HistoricoModule { }
