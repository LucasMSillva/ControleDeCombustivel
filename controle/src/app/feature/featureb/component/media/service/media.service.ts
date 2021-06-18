import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly API = 'https://combustivelapp.herokuapp.com/api/combustivel/valor-media-compra-venda-municipio';

  constructor(private http: HttpClient){}

    public list(): Observable<any>{
        return this.http.get(this.API);
    }
}