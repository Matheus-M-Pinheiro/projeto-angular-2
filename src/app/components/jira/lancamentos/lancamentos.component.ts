import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/service/jira.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Apontamento } from 'src/app/model/jira/apontamento';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  apontamentosFiltrados: Apontamento[] = []

  constructor(
    private apiJira: JiraService
  ){}

  ngOnInit(): void {
    
  }

  filtrarPorData(): void{
    this.apiJira.getColaboradorPorId(1).subscribe( (colaborador) => {
      console.log(colaborador)
      let apontamentos = colaborador.apontamentoHoras
      console.log( this.range.value.start?.toISOString() )
      console.log( this.range.value.end?.toISOString() )
      this.apontamentosFiltrados = apontamentos.filter( (apt) => {
        let dataApt = new Date(apt.dataLancamento)
        // Checagem se a varivael não é null
        if( this.range.value.start && this.range.value.end ){
          // Checa se a data do apontamento esta entre as datas selecionadas
          if( this.range.value.start <= dataApt && this.range.value.end >= dataApt ){
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      })
      console.log(this.apontamentosFiltrados)
    })
  }

}
