import { DistribuidoraComponent } from './feature/distribuidoraFeature/pages/distribuidora/distribuidora.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoricoComponent } from './feature/historicoFeature/pages/historico/historico.component';

const routes: Routes = [
{ path: 'historico', component: HistoricoComponent },
{ path: 'distribuidora', component: DistribuidoraComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
