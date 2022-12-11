import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao.component';
import { BotaoRoutingModule } from './botao-routing.module';



@NgModule({
  declarations: [BotaoComponent],
  imports: [
    CommonModule,
    BotaoRoutingModule

  ]
})
export class BotaoModule { }
