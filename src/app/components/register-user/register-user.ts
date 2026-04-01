import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ErrorMessages } from '../../core/dtos/Utils/errorMessages.utils';
import { onValidatorInput } from '../../core/dtos/Utils/InputValidators/registerUser.utils';
import { Router } from '@angular/router';
import { UserServices } from '../../core/services/userServices';
import { UserRegisterDto } from '../../core/dtos/user/register';

@Component({
  standalone: true,
  selector: 'app-register-user',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatIconModule,ReactiveFormsModule,MatDatepickerModule],
  templateUrl: './register-user.html',
  styleUrls: ['./register-user.scss'],
})
export class RegisterUser {
  constructor(
    private router: Router, // 2. Injete no construtor
    private userService: UserServices,
  ) {}  

  dataNascimentoMaxima: string = '';
  dataNascimentoMinima: string = '';
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  form!: FormGroup;
  error: string = '';  

  ngOnInit() {
      const hoje = new Date();

      const dataMax = new Date(hoje.getFullYear() - 18, hoje.getMonth(), hoje.getDate());
      const dataMin = new Date(hoje.getFullYear() - 100, hoje.getMonth(), hoje.getDate());

      this.dataNascimentoMaxima = dataMax.toISOString().split('T')[0]; // "YYYY-MM-DD"
      this.dataNascimentoMinima = dataMin.toISOString().split('T')[0]; // "YYYY-MM-DD"

      this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      midName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
      birthDate: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  exibirSenha() {
    this.hidePassword = !this.hidePassword;
  }

  exibirConfirmPassword() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  async onSubmit() {
    console.log('CHAMOU O MÉTODO!'); // Verifique se isso aparece no F12
    if (this.form.valid) {
      const password = this.form.value.password;
      const passwordConfirm = this.form.value.passwordConfirm;

      if(password !== passwordConfirm) {
        this.error = ErrorMessages.passwordNotTheSame();
        return;
      }
      const userData = new UserRegisterDto(this.form.value.name, this.form.value.midName, this.form.value.email, this.form.value.cpf,this.form.value.birthDate, password, passwordConfirm, 1, false);
      this.userService.register(userData).pipe().subscribe({
        next: (response) => {
          alert(response.message);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.error = err.error.message || 'Ocorreu um erro durante o registro.';
        }
      });
    } else {
      this.error = onValidatorInput(this.form);
    }
  }
}
