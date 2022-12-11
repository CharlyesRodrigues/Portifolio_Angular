import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  public traducao = 'Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:'



  constructor() { }
  ngOnInit(): void {

  }
  english() {

    this.traducao = 'Hello, my name is Charlyes Souza Rodrigues and I am a Front-end developer, Technologies that I have experiences:'
  }
  portugues() {

    this.traducao = 'Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:'
  }
  espanhol() {

    this.traducao = 'Hola, mi nombre es Charlyes Souza Rodrigues y soy desarrollador Front-end, Tecnologías que tengo experiencias:'
  }




}