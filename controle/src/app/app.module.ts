import { HistoricoModule } from './feature/historicoFeature/pages/historico/historico.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { ListDistribuidoraComponent } from './feature/distribuidoraFeature/component/list-distribuidora/list-distribuidora.component';
import { DistribuidoraComponent } from './feature/distribuidoraFeature/pages/distribuidora/distribuidora.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListDistribuidoraComponent,
    DistribuidoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HistoricoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
