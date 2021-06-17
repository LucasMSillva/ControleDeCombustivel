import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDistribuidoraModule } from './../../component/list-distribuidora/list-distribuidora.module';
import { DistribuidoraComponent } from './distribuidora.component';

@NgModule({
  declarations: [
    DistribuidoraComponent
  ],
  imports: [
    CommonModule,
    ListDistribuidoraModule,
  ],
  exports:[
    DistribuidoraComponent
  ]
})
export class DistribuidoraModule { }
