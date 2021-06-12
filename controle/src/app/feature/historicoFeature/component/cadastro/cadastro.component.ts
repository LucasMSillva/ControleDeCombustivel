import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Historico as historicoInterface} from './models/historico'
import { Historico } from './models/historico.class';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  createForm(historico: Historico){
    this.form = new FormGroup({
      combustivel: new FormControl(historico.combustivel, Validators.required),
      data: new FormControl(historico.data, Validators.required),
      preco: new FormControl(historico.preco, Validators.required),
    })
  }
  ngOnInit(): void {
    this.createForm(new Historico());
  }

  onSubmit(){
    if (this.form.valid) {
      console.log(this.form.value)
      const dados = {
        combustivel: this.form.get('combustivel')?.value,
        data: this.form.get('data')?.value,
        preco: this.form.get('preco')?.value
    }
    this.form.reset()
    return;
  }
}

public verificaValidTouched(campo:any): boolean {

  return !this.form.get(campo)?.valid && !this.form.get(campo)?.touched

  return !campo.valid && campo.touched;

}

public erro(campo:any): any {
  return {
  'has-error': this.verificaValidTouched(campo),
  'has-feedback': this.verificaValidTouched(campo) 
  }
 }
}
