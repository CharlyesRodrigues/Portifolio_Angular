
:pushpin: Requisitos:

1) A lista de tecnologias deve ser um array onde no HTML você irá fazer um map para listar

2) Ao clicar no botão de linguagem  o texto de apresentação "Olá meu nome...." muda para
a linguagem selecionada

3) O botão de linguagem  deve ser um componente onde você passará 3 propriedades: Título,
ícone e o click dele

4) Esse projeto foi feito em Angular e para sua estilização utilizei o Saas.


Passo a Passo do Projeto:
Instalando no terminal power shell clicando no botão direito como administrador para o projeto em angular 
https://camo.githubusercontent.com/160ef944b0e9c7960347d0d04c18dbf63116ce5ae0a73f9297ca46389a515bfe/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
1º Executar o comando CLI usando o npm gerenciador de pacotes e clica com botão direito em administrador, ao abrir digita:
npm install -g @angular/cli  
2º Para criar, construir e servir um novo projeto Angular básico em um servidor de desenvolvimento, vá para o diretório (pasta) que criou no seu espaço de trabalho e use o seguinte comando👇
ng new nome do projeto ( ex. projetoangular-web3.0)  
68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
 Quando perguntar digita: - y 
68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
Escolhe a estilização `` `Sasse dáEnter```
Aguarda a instalação dos pacotes no projeto,
68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
E altera copiando e colando para a pasta do projeto que foi criado antes de abrir no VSCode com o comando.
cd nomepastaprojeto

3º Agora sim vai Abrir o Projeto no Terminal para a ferramenta VSCode, digitando 👊
code .

Dentro do editor de código VSCode:
Executar o projeto no servidor digitando:
ng serve

68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
 Vai compilar na porta http://localhost:4200/.
Criando component:
ng g c
68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
 O componente é composto por 3 arquivos, para template (HTML), estilo (SASS) e classe (TS) e toda essa configuração é feita dentro do decorador @Component onde é passado como metadados o template, o estilo e um seletor para que este componente possa ser usado em outro template.

Criando module:
ng g m
68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f58776352666c4f39484430536b365261524d2f67697068792e676966
 É uma classe marcada pelo decorador. recebe um objeto de metadados que descreve como compilar o modelo de um componente e como criar um injetor em tempo de execução.

Bibliotecas importadas no terminal do VSCode👇
ng add @angular/material


    Para criar os projetos em Angular, temos que instalar sua CLI e para isso utilizei o comando
npm install -g @angular/cli.
Após esse comando acima, no terminal digitei outro comando que é o ng new  e o nome do projeto a 
qual criei que nesse caso é Portifolio_Angular. Abri o projeto no Visual Code

    Nesse projeto utilizei 1 pasta cujo nome é components que contém uma subpasta chamada botao.Criei uma pasta 
chamada header e uma screens com uma subpasta chamada home.Cada pasta contém 4 arquivos components, 1 arquivo module e
um arquivo routing. Para a criação dos 4 arquivos components, digitei o comando ng g c que me gerou os 4 arquivos components.

Exemplo: Pasta home teve os seguintes arquivos gerados :
component.html,
component.scss,
component.spec.ts,
component.ts.
    Faltou o arquivo module que foi criado através do comando ng g m e o routing que foi criado manualmente através
do exemplo da routing do app.
 Após criado os components, os modules e os routings, eu configurei meu arquivo global dentro do styles.scss e importei
 dentro dele a font contida no import forncecida pelo google fonts.Após isso apaguei quase toda a escrita contida dentro
 do component.html do meu app. Como eu disse apaguei quase tudo, ou seja, deixei só o <router-outlet>





![portugues](https://user-images.githubusercontent.com/98665329/207726923-15719394-0827-4576-8269-7d42be95396a.PNG)


![ingles](https://user-images.githubusercontent.com/98665329/207726937-bce02733-25cf-44bb-b58d-8ba0901429de.PNG)


![espanhol](https://user-images.githubusercontent.com/98665329/207726959-6aeead59-b916-498e-adb4-067b4f9580cf.PNG)
