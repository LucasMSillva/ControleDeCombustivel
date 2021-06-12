import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro.component';
import { MensagemErrorModule } from './../../../../shared/mensagem-error/mensagem-error.module';

@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemErrorModule
  ],
  exports: [ 
    CadastroComponent
  ]

})
export class CadastroModule { }
