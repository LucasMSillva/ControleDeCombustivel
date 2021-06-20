import { Component, OnInit } from '@angular/core'

import { Listagem } from './models/listagem';
import { DistribuidoraService } from '../../pages/distribuidora/service/distribuidora.service';

@Component({
  selector: 'app-list-distribuidora',
  templateUrl: './list-distribuidora.component.html',
  styleUrls: ['./list-distribuidora.component.css']
})
export class ListDistribuidoraComponent implements OnInit {
  public dados:any
  public visual!:Listagem;

  constructor(private HistoricoService:DistribuidoraService ) { }

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
        // this.dados.reverse();
      });
  }
}