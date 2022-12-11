import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotaoComponent } from './botao.component';


const routes: Routes = [{ path: '', component: BotaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotaoRoutingModule { }