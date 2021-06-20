import { Component, OnInit } from '@angular/core';

import { HistoricoService } from '../../service/historico.service';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  public dados: any;
  pedido: any;

  constructor(private HistoricoService:HistoricoService) {}
  
  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.HistoricoService.list()
    .subscribe(
      (res) => {
        this.dados = res.sort(function (a:any, b:any) {
          return a.id - b.id;
        }) 
        console.log(this.dados)
        this.dados .reverse();
      });
  }
  public receberPedido(event: number): void {
    console.log(event)
  }
}

