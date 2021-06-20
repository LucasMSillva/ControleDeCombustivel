import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import { MunicipioComponent } from './municipio.component';
import { MensagemErrorModule } from 'src/app/shared/mensagem-error/mensagem-error.module';


@NgModule({
  declarations: [
    MunicipioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemErrorModule,
    HttpClientModule,
    
  ],
  exports: [ 
    MunicipioComponent
  ]
})
export class MunicipioModule { }
