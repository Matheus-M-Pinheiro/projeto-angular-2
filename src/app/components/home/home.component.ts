import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formLogin = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private lc: LocalstorageService,
    private apiLogin: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lc.remove('idUser')
  }

  login(): void {
    this.apiLogin.fazerLogin(this.formLogin.value.user, this.formLogin.value.pass).subscribe((resp) => {
      if (resp.length > 0) {
        Swal.fire({
          title: 'Login feito!',
          text: 'Você sera redirecionado para a Home.',
          icon: 'success',
          confirmButtonText: 'OK!'
        }).then( (result) => {
          this.router.navigate(['/vagas/home'])
        })
      } else {
        Swal.fire({
          title: 'Falha no login!',
          text: 'Username e/ou senha incorretos.',
          icon: 'error',
          confirmButtonText: 'OK!'
        })
        // Swal.fire({
        //   title: 'Deletar item?',
        //   text: 'Item sera deletado para sempre.',
        //   icon: 'question',
        //   confirmButtonText: 'Sim, deletar',
        //   showDenyButton: true,
        //   denyButtonText: 'não deletar'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     Swal.fire({
        //       title: 'Item deletado!',
        //       icon: 'success',
        //       confirmButtonText: 'OK!'
        //     })
        //   } else {
        //     console.log('Ação cancelada!')
        //   }
        // })
      }
    })
  }

}
