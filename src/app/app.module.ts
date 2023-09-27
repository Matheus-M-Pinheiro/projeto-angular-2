import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component';
import { QuestionarioComponent } from './components/vagas/questionario/questionario.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { TabelaComponent } from './components/shared/tabela/tabela.component';
import { VagasComponent } from './components/vagas/vagas/vagas.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExemplosMaterialComponent } from './components/exemplos-material/exemplos-material.component';
import { ModalMaterialComponent } from './components/shared/modal-material/modal-material.component';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { LancamentosComponent } from './components/jira/lancamentos/lancamentos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    QuestionarioComponent,
    SidenavComponent,
    TabelaComponent,
    VagasComponent,
    HomeComponent,
    ExemplosMaterialComponent,
    ModalMaterialComponent,
    LancamentosComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
