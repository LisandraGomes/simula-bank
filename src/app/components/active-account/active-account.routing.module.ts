import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

export const routes = [
    {
        path: 'confirmacao',
        loadComponent: () => import('./active-account').then(m => m.ActiveAccount)
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveAccountRoutingModule {}