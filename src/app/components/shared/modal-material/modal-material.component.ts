import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-material',
  templateUrl: './modal-material.component.html',
  styleUrls: ['./modal-material.component.scss']
})
export class ModalMaterialComponent {

  titulo: string = ''

  constructor( 
    private dialogRef: MatDialogRef<ModalMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) data: any){
      this.titulo = data.titulo
    }

}
