import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem-error',
  templateUrl: './mensagem-error.component.html',
  styleUrls: ['./mensagem-error.component.css']
})
export class MensagemErrorComponent implements OnInit {
  
  @Input() msgErro!: string;
  @Input() mostrarErro!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
