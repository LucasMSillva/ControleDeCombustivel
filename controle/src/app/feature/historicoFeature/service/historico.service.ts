import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";



@Injectable()
export class HistoricoService{
    constructor(private http: HttpClient){}

    public postPutCombustivel = (dados: any): Observable<any> => {

        return this.http.post<any>(`https://combustivelapp.herokuapp.com/api/historico`, dados)

}
}