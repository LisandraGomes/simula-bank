import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterUser } from './register-user';

export const routes: Routes = [
//Cada objeto é uma rota, cada rota tem um caminho e um componente
    {
        path: '',
        component: RegisterUser
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterUserRoutingModule {}