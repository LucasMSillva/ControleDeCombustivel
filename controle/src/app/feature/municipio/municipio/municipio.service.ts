import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from '../models/municipio.class.';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private readonly API = 'https://combustivelapp.herokuapp.com/api/combustivel/media-de-preco';

  constructor(private http: HttpClient){}

    // Metodo para buscar atraves de um parametro   
  public getByMunicipio = (municipio: string): Observable<any> => {
      return this.http.get(`${this.API}/${municipio}`);
  }
}