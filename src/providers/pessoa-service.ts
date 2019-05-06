import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from 'src/models/pessoa.model';
import { Observable } from 'rxjs';


@Injectable()
export class PessoaService {

    constructor(private http: HttpClient) {
    }

    listPessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`http://localhost:8080/GrupoZap/vivareal/teste`);
    }


}