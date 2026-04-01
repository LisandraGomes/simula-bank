import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthDto } from '../../core/dtos/auth.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { ErrorMessages } from '../../core/dtos/Utils/errorMessages.utils';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../core/services/authServices';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login.ts',
  imports: [MatIconModule,ReactiveFormsModule, MatError, MatButtonModule, MatInputModule,MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @Output() loginSuccess = new EventEmitter<void>();
  form!: FormGroup;
  hidePassword: boolean = true;
  error : string = '';
  isLoading: boolean = false;
  authDto: AuthDto = { login: '', password: '', tokenRefreshOrAccess: '' };

  constructor(private authService: AuthService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      tokenRefreshOrAccess: new FormControl('')
    });
  }
   
  onSubmit() {
    if (this.form.valid) {
      this.authDto.login = this.form.value.login;
      this.authDto.password = this.form.value.password;
      
      this.send();
    }
    else{
      this.error = 'Por favor, preencha todos os campos corretamente.';
    }
  }
  onValidatorInput(){
    //Regras Senha
    if(Validators.minLength(6)(this.form.get('password')!)){
      this.error = ErrorMessages.minLength('password',6);
      return;
    }
    //Regras Login
    if(Validators.pattern(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$|^\d{11}$/)(this.form.get('login')!)
      || Validators.email(this.form.get('login')!)
      || this.form.get('login')!.value.length < 11)
    {
      this.error = ErrorMessages.patternLogin();
      return;
    }
  }

  async send(): Promise<void> {
    this.isLoading = true;
    this.error = '';
    
    await this.authService.login(this.authDto).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.cdRef.detectChanges();
        console.log('Login realizado com sucesso:', response);
        this.loginSuccess.emit();
        this.redirect();
      },
      error: (error) => {
        this.isLoading = false;
        this.cdRef.detectChanges();
        console.error('Erro ao fazer login:', error, this.isLoading);
        alert(error.message || 'Erro ao fazer login. Tente novamente.');
        this.error = error.message || 'Erro ao fazer login. Tente novamente.';
      }
    });
  }

  redirect(): void {
    this.router.navigate(['/home']);
  }

  exibirSenha() {
    this.hidePassword = !this.hidePassword;
  }
}
