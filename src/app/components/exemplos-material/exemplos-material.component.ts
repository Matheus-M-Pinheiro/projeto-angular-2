import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalMaterialComponent } from '../shared/modal-material/modal-material.component';

@Component({
  selector: 'app-exemplos-material',
  templateUrl: './exemplos-material.component.html',
  styleUrls: ['./exemplos-material.component.scss']
})
export class ExemplosMaterialComponent implements OnInit {

  // nomes: string[] = ['Carol', 'Luciano', 'Luiz', 'Millena', 'Rafael']
  // nomesFiltrado: string[] = ['Carol', 'Luciano', 'Luiz', 'Millena', 'Rafael']
  nomes: any[] = [
    { nome: 'Carol', idade: 20, altura: 1.60 },
    { nome: 'Luciano', idade: 20, altura: 1.60 },
    { nome: 'Luiz', idade: 20, altura: 1.60 },
    { nome: 'Millena', idade: 20, altura: 1.60 },
    { nome: 'Rafael', idade: 20, altura: 1.60 },
  ]
  nomesFiltrado: any[] = [
    { nome: 'Carol', idade: 20, altura: 1.60 },
    { nome: 'Luciano', idade: 20, altura: 1.60 },
    { nome: 'Luiz', idade: 20, altura: 1.60 },
    { nome: 'Millena', idade: 20, altura: 1.60 },
    { nome: 'Rafael', idade: 20, altura: 1.60 },
  ]
  valorInput: string = '';

  constructor(
    private dialog: MatDialog
  ){}


  ngOnInit(): void {

  }

  pressionaTecla(): void {

    this.nomesFiltrado = this.nomes.filter((pessoa) => {
      return pessoa.nome.toLowerCase().startsWith(this.valorInput.toLowerCase())
    })

  }

  abrirModal(): void{

    let dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = false
    // dialogConfig.autoFocus = true

    dialogConfig.data = {
      titulo: 'Modal para teste'
    }

    this.dialog.open(ModalMaterialComponent, dialogConfig)

  }

}
