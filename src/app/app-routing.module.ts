import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './guard/user.guard';
import { HomeComponent } from './components/home/home.component';
import { VagasComponent } from './components/vagas/vagas/vagas.component';
import { QuestionarioComponent } from './components/vagas/questionario/questionario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vagas/home', component: VagasComponent },
  { path: 'vagas/questionario/:id', component: QuestionarioComponent, canActivate: [userGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
