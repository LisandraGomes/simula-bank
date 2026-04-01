import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-remember-password',
  imports: [MatIconModule, ReactiveFormsModule,MatButtonModule, MatInputModule,MatFormFieldModule],
  templateUrl: './remember-password.html',
  styleUrl: './remember-password.scss',
})
export class RememberPassword {
  form! : FormGroup;
  error: string = '';

  onSubmit(){
    
  }
}
