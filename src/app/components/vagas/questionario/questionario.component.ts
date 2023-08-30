import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaga } from 'src/app/model/vagas/vaga';
import { VagasService } from 'src/app/service/vagas.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  idDaUrl: number = 0
  vaga: Vaga = new Vaga()

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiVagas: VagasService
  ) { }

  ngOnInit(): void{
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegaInfos()
  }

  pegaInfos(): void{
    this.apiVagas.getVagaPeloId( this.idDaUrl ).subscribe( (respApi) => {
      this.vaga = respApi
    })
  }

}
