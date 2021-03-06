import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';

import { Historico } from './../component/cadastro/models/historico';
import { Observable } from "rxjs";


@Injectable({ providedIn:'root' })
export class HistoricoService{

    private readonly API = 'https://combustivelapp.herokuapp.com/api/historico';

    constructor(private http: HttpClient){}

    public list(): Observable<any>{
        return this.http.get(this.API);
    }

    public postPutCombustivel = (dados: Historico): Observable<Historico> => {
        return this.http.post<Historico>(this.API, dados)
    }

    public delete = (id: number): Observable<any> => {
        return this.http.delete(`${this.API}/${id}`);
    }

    public getById = (dadoid: number): Observable<any> => {
        return this.http.get(`${this.API}/${dadoid}`);
    }
    public PutCombustivel = (dados: Historico): Observable<Historico> => {
        return this.http.put<Historico>(this.API, dados);
    }
}