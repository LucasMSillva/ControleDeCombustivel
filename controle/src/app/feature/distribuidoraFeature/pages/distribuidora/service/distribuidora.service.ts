import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listagem } from '../../../component/list-distribuidora/models/listagem';

@Injectable({
  providedIn: 'root'
})
export class DistribuidoraService {
  private readonly API = 'https://combustivelapp.herokuapp.com/api/combustivel/dados-agrupados-por-distribuidora';

  constructor(private http: HttpClient){}

    public list(): Observable<any>{
        return this.http.get(this.API);
    }

    public postPutCombustivel = (dados: Listagem): Observable<Listagem> => {
        return this.http.post<Listagem>(this.API, dados)
    }

    public delete = (id: number): Observable<any> => {
        return this.http.delete(`${this.API}/${id}`);
    }

    public getById = (dadoid: number): Observable<any> => {
        return this.http.get(`${this.API}/${dadoid}`);
    }
    public PutCombustivel = (dados: Listagem): Observable<Listagem> => {
        return this.http.put<Listagem>(this.API, dados);
    }
}