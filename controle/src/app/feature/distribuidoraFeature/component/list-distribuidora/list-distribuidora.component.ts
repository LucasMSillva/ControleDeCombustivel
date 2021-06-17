import { Listagem } from './models/listagem';
import { Component, OnInit } from '@angular/core'

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