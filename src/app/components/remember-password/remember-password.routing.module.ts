import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RememberPassword } from './remember-password';

export const routes: Routes = [
//Cada objeto é uma rota, cada rota tem um caminho e um componente
    {
        path: '',
        component: RememberPassword
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RememberPasswordRoutingModule {}