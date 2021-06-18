
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DistribuidoraComponent } from './feature/distribuidoraFeature/pages/distribuidora/distribuidora.component';
import { HistoricoComponent } from './feature/historicoFeature/pages/historico/historico.component';
import { MediaComponent } from './feature/featureb/component/media/media.component';
import { MunicipioComponent } from './feature/municipio/municipio/municipio.component';

const routes: Routes = [
{ path: 'historico', component: HistoricoComponent },
{ path: 'distribuidora', component: DistribuidoraComponent },
{ path: 'media', component: MediaComponent },
{ path: 'municipio', component: MunicipioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
