import { Expediente } from "./expediente"
import { Local } from "./local"
import { Questao } from "./questao"
import { Salario } from "./salario"

export class Vaga {

  public id: number
  public vaga: string
  public empresa: number
  public salario: Salario
  public quantidade: number
  public local: Local
  public publicacao: string
  public descricao: string
  public expediente: Expediente
  public contratacao: string
  public infosAdicionais: string
  public questionario: Questao[]

  constructor(){
    this.id = 0
    this.vaga = ''
    this.empresa = 0
    this.salario = new Salario()
    this.quantidade = 0
    this.local = new Local()
    this.publicacao = ''
    this.descricao = ''
    this.expediente = new Expediente()
    this.contratacao = ''
    this.infosAdicionais = ''
    this.questionario = []
  }

}