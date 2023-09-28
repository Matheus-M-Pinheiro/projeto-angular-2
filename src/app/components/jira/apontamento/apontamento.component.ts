import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Apontamento } from 'src/app/model/jira/apontamento';
import { Projeto } from 'src/app/model/jira/projeto';
import { JiraService } from 'src/app/service/jira.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.scss']
})
export class ApontamentoComponent implements OnInit {

  projetos: Projeto[] = []
  projetosFiltrados: Projeto[] = []
  formApontamento: FormGroup

  constructor(
    private apiJira: JiraService
  ){
    this.formApontamento = new FormGroup({
      projeto: new FormControl(''),
      qtdHoras: new FormControl(''),
      dataApontamento: new FormControl<Date | null>(null)
    })
  }

  ngOnInit(): void {
    this.getInfos()
  }
  
  getInfos(): void {
    this.apiJira.getTodosProjetos().subscribe( (projetos) => {
      this.projetos = projetos
      this.projetosFiltrados = projetos
    })
  }
  
  filtrarAutocomplete(): void{
    this.projetosFiltrados = this.projetos.filter((proj) => {
      return proj.nome.toLowerCase().includes(this.formApontamento.value.projeto.toLowerCase())
    })
  }

  fazerApontamento(): void{
    this.apiJira.getColaboradorPorId(1).subscribe( (colaborador) => {
      let novoApontamento = new Apontamento()
      let projetoFind = this.projetos.find((proj) => proj.nome == this.formApontamento.value.projeto )
      if( projetoFind ){
        novoApontamento.projeto = projetoFind.id
      } else {
        Swal.fire({
          title: 'Projeto não preenchido',
          text: 'Preencha o campo projeto',
          icon: 'error'
        })
        return
      }
      novoApontamento.qtdHoras = Number(this.formApontamento.value.qtdHoras)
      novoApontamento.dataLancamento = this.formApontamento.value.dataApontamento.toISOString()
      let colaboradorParaEnviar = colaborador
      colaboradorParaEnviar.apontamentoHoras.push(novoApontamento)
      this.apiJira.putAtualizaColaborador(colaborador.id, colaboradorParaEnviar).subscribe((resp) => {
        Swal.fire({
          title: 'Horas apontadas!',
          text: 'Suas horas foram lançadas com sucesso!',
          icon: 'success'
        })
      })

    })
  }

}
