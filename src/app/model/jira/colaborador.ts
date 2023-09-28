import { Apontamento } from "./apontamento"

export class Colaborador {

  public id: number
  public nomeCompleto: string
  public ativo: boolean
  public time: number
  public cargo: number
  public apontamentoHoras: Apontamento[]

  constructor() {
    this.id = 0
    this.nomeCompleto = ''
    this.ativo = false
    this.time = 0
    this.cargo = 0
    this.apontamentoHoras = []
  }

}
