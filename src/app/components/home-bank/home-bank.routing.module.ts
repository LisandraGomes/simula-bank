import { RouterModule, Routes } from "@angular/router";
import { HomeBank } from "./home-bank";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: '',
        component: HomeBank
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBankRoutingModule {}