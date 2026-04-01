import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUser } from './register-user';
import { RegisterUserRoutingModule } from './registerUser.routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RegisterUser, RegisterUserRoutingModule],
})
export class RegisterUserModule {}
