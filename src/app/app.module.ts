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

@NgModule({
  declarations: [
    AppComponent,
    QuestionarioComponent,
    SidenavComponent,
    TabelaComponent,
    VagasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
