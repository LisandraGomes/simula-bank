import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

{
    path: '',
    loadChildren: () => import('./components/login/login-module').then(m => m.LoginModule)
},
{
    path: 'registerUser',
    loadChildren: () => import('./components/register-user/register-user-module').then(m => m.RegisterUserModule)
},
{
    path: 'forgotPassword',
    loadChildren: () => import('./components/remember-password/remember-password-module').then(m => m.RememberPasswordModule)
},
{
    path: 'home',
    loadChildren: () => import('./components/home-bank/home-bank.routing.module').then(m => m.HomeBankRoutingModule)
},
// {
//     path:'confirmacao',
//     loadChildren: () => import('./components/active-account/active-account-module').then(m => m.ActiveAccountModule)
// },
{
    path: 'confirmacao',
    loadComponent: () => import('./components/active-account/active-account').then(m => m.ActiveAccount)
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}