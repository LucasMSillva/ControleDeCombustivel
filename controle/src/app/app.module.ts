import { HistoricoModule } from './feature/historicoFeature/pages/historico/historico.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { DistribuidoraComponent } from './feature/distribuidoraFeature/pages/distribuidora/distribuidora.component';
import { ListDistribuidoraComponent } from './feature/distribuidoraFeature/component/list-distribuidora/list-distribuidora.component';
import { HistoricoService } from './feature/historicoFeature/service/historico.service';
import { MediaComponent } from './feature/featureb/component/media/media.component';
import { MunicipioComponent } from './feature/municipio/municipio/municipio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListDistribuidoraComponent,
    DistribuidoraComponent,
    MediaComponent,
    MunicipioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HistoricoModule,
  ],
  exports: [
    HistoricoService,
  ],
  providers: [HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
