import { Component, OnInit } from '@angular/core';

import { HistoricoService } from '../../service/historico.service';
import { Historico as  historicoInterface } from './../cadastro/models/historico';


@Component({
  selector: 'app-lista-historico',
  templateUrl: './lista-historico.component.html',
  styleUrls: ['./lista-historico.component.css']
})
export class ListaHistoricoComponent implements OnInit {

  public dados: any;
  public remover:any;
  public visual!: historicoInterface;

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
        this.dados .reverse();
      });
  }

  public delete(id:number): void {
    this.HistoricoService.delete(id)
    .subscribe(
      (res) => {
        console.log("sucesso");
        this.getAll();
      },
     (error) => {
       console.log(error);
       this.getAll();
     });
  }

  public visualiza(dadoid:number): void {
    this.HistoricoService.getById(dadoid)
    .subscribe(
      (res) => {this.visual = res
        console.log(this.visual);
      },
     (error) => {
       console.log(error);
     });
  }
}