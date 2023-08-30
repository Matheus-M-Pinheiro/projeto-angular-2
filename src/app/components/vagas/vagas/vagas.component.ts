import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/model/vagas/vaga';
import { VagasService } from 'src/app/service/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  vagas: Vaga[] = []

  constructor(
    private apiVagas: VagasService
  ) { }

  ngOnInit(): void {
    this.pegarInfos()
  }

  pegarInfos(): void {
    this.apiVagas.getTodasVagas().subscribe( (respApi) => {
      this.vagas = respApi
    })
  }

}
