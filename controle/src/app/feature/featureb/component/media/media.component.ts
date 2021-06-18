import { Component, OnInit } from '@angular/core';

import { media } from './../models/media';
import { MediaService } from './service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  public dados:any
  public mediaid!:media;

  constructor(private HistoricoService:MediaService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.HistoricoService.list()
    .subscribe(
      (res) => {
        this.dados = res.sort(function (a:any, b:any) {
          return a.atributo - b.atributo;
        }) 
        this.dados .reverse();
      });
  }

}
