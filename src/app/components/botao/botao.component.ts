import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  /** 1º Criei uma Variável com o nome de tradução  e atribui a mensagem principal do texto,
   *  2º Criei 3 funções uma para cada idioma a qual será modificada atráves do this. que mudará o estado atual da linguagem
   * para a linguagem escolhida. */

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