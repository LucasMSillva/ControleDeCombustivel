import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HistoricoService } from '../../service/historico.service';


@Component({
  selector: 'app-lista-historico',
  templateUrl: './lista-historico.component.html',
  styleUrls: ['./lista-historico.component.css']
})
export class ListaHistoricoComponent implements OnInit {

  public dados: any;

  constructor(private HistoricoService:HistoricoService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.HistoricoService.list()
    .subscribe(
      (res) => {
        this.dados = res
      });
  }
}

