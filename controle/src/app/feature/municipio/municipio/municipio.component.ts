import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Municipio } from '../models/municipio.class.';
import { MunicipioService } from './municipio.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  public form!: FormGroup;
  public mediaresult!: string;

  constructor(private MunicipioService:MunicipioService) { }

  public createForm(municipio:Municipio ){
    this.form = new FormGroup({
      municipio: new FormControl(municipio.municipio,Validators.required),
  })
}

  ngOnInit(): void {
    this.createForm(new Municipio());
  }

  public onSubmit(){
      if (this.form.valid) {
        const dados = this.form.get('municipio')?.value;
        this.MunicipioService.getByMunicipio(dados)
        .subscribe(
          (res) => { 
          this.mediaresult = res;
          }, 
          (error) => {
          console.log(error)
          }
        )
        this.form.reset()
        return;
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