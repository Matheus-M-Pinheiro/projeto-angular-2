import { Carrinho } from "./carrinho"

export class Usuario {

  public id: number
  public nomeCompleto: string
  public username: string
  public tipo: string
  public favoritos: number[]
  public carrinho: Carrinho[]

  constructor(){
    this.id = 0
    this.nomeCompleto = ''
    this.username = ''
    this.tipo = ''
    this.favoritos = []
    this.carrinho = []
  }

}