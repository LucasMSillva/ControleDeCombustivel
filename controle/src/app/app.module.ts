import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './feature/historicoFeature/cadastro/cadastro.component';
import { ComponentsComponent } from './core/components/components.component';
import { MenuComponent } from './core/component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ComponentsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
