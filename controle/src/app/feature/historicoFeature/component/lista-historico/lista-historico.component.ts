import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HistoricoService } from '../../service/historico.service';
import { Historico as  historicoInterface } from './../cadastro/models/historico';



@Component({
  selector: 'app-lista-historico',
  templateUrl: './lista-historico.component.html',
  styleUrls: ['./lista-historico.component.css']
})
export class ListaHistoricoComponent implements OnInit {

  public remover:any;
  public visual!: historicoInterface;
  @Input() public dados: Array<historicoInterface> = [];
  @Output() pedido: EventEmitter<any> = new EventEmitter();
  

  constructor(private HistoricoService:HistoricoService) {}

  ngOnInit(): void {
    
  }  

  public delete(id:number): void {
    this.HistoricoService.delete(id)
    .subscribe(
      (res) => {
        console.log("sucesso");
      },
     (error) => {
       console.log(error);
     });
  }

  public visualiza(dadoid:number): void {
    this.pedido.emit(dadoid);
    // this.HistoricoService.getById(dadoid)
    // .subscribe(
    //   (res) => {
    //     this.visual = res
    //     console.log(this.visual);
    //   },
    //  (error) => {
    //    console.log(error);
    // });
  }
}