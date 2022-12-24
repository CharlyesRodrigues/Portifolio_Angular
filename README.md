
Requisitos:

1) A lista de tecnologias deve ser um array onde no HTML você irá fazer um map para listar

2) Ao clicar no botão de linguagem  o texto de apresentação "Olá meu nome...." muda para
a linguagem selecionada

3) O botão de linguagem  deve ser um componente onde você passará 3 propriedades: Título,
ícone e o click dele

4) Esse projeto foi feito em Angular e para sua estilização utilizei o Saas.
:nerd_face:


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
