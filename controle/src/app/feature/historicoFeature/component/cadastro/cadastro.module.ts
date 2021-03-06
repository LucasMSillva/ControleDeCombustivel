import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro.component';
import { MensagemErrorModule } from 'src/app/shared/mensagem-error/mensagem-error.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemErrorModule,
    HttpClientModule
  ],
  exports: [ 
    CadastroComponent
  ]

})
export class CadastroModule { }
