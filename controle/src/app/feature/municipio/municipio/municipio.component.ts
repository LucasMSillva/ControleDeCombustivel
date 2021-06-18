import { Municipio } from './../models/municipio';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Municipio } from '../models/municipio';


@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  public form!: FormGroup;

  constructor(private MunicipioService: MunicipioService) { }

  public createForm(municipio: Municipio){
    this.form = new FormGroup({
      municipio: new FormControl(municipio.municipio,Validators.required),
  })
}

  ngOnInit(): void {
  }

public onSubmit(){
    if (this.form.valid) {
      const data = this.form.get('data')?.value
      const newData = data.split('-').reverse().join('/');
      const dados = { 
        combustivel: this.form.get('combustivel')?.value,
        data: newData,
        preco: this.form.get('preco')?.value, 

}
}
}

public verificaValidTouched(campo: string) {

  return(
     !this.form.get(campo)!.valid && 
     (this.form.get(campo)!.touched || this.form.get(campo)!.dirty)
  )
}

public erro(campo:any): any {
  return {
  'has-error': this.verificaValidTouched(campo),
  'has-feedback': this.verificaValidTouched(campo) 
  }
 }
}
