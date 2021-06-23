import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HistoricoService } from '../../service/historico.service';
import { Historico as  historicoInterface } from './../cadastro/models/historico';


// classe filho
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

  @Output() deletar: EventEmitter<any> = new EventEmitter();

  constructor(private HistoricoService:HistoricoService) {}

  ngOnInit(): void {
    
  }  

  public delete(id:number): void {
    this.deletar.emit(id);
  }

  public visualiza(dadoid:number): void {
    this.pedido.emit(dadoid);
  }
}