import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/pessoa.model';
import { PessoaService } from 'src/providers/pessoa-service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  private pessoasList : Pessoa[];

  constructor(private pessoasService: PessoaService) {

   }

  ngOnInit() {
  }

pegarLista() {
  this.pessoasService.listPessoas()
    .subscribe(retorno => {
        this.pessoasList = retorno;
  })
}

}
