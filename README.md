
:pushpin: Requisitos:

1) A lista de tecnologias deve ser um array onde no HTML você irá fazer um map para listar

2) Ao clicar no botão de linguagem  o texto de apresentação "Olá meu nome...." muda para
a linguagem selecionada

3) O botão de linguagem  deve ser um componente onde você passará 3 propriedades: Título,
ícone e o click dele

4) Esse projeto foi feito em Angular e para sua estilização utilizei o Saas.


                                                    Passo a Passo do Projeto:
Instalando no terminal power shell clicando no botão direito como administrador para o projeto em angular 

1º Executar o comando CLI usando o npm gerenciador de pacotes e clica com botão direito em administrador, ao abrir digita:
npm install -g @angular/cli  

2º Para criar, construir e servir um novo projeto Angular básico em um servidor de desenvolvimento, vá para o diretório (pasta) que criou no seu espaço de trabalho e use o seguinte comando

ng new nome do projeto (no meu caso Portifolio_Angular)  

Quando perguntar digita: - y 

Escolhe a estilização Sass e dá Enter 
Aguarda a instalação dos pacotes no projeto,
E altera copiando e colando para a pasta do projeto que foi criado antes de abrir no VSCode com o comando.
cd nome pasta projeto

3º Agora sim vai Abrir o Projeto no Terminal para a ferramenta VSCode, digitando 👊
code .

Dentro do editor de código VSCode:
Executar o projeto no servidor digitando:
ng serve


Vai compilar na porta http://localhost:4200/.
Criando component:
ng g c

Exemplo: Pasta home teve os seguintes arquivos gerados :

component.html,
component.scss,
component.spec.ts,
component.ts.

 O componente é composto por 3 arquivos, para template (HTML), estilo (SASS) e classe (TS) e toda essa configuração é feita dentro do decorador @Component onde é passado como metadados o template, o estilo e um seletor para que este componente possa ser usado em outro template.

Criando module:

ng g m


Após criado os components, os modules e os routings, eu configurei meu arquivo global dentro do styles.scss e importei
dentro dele a font contida no import forncecida pelo google fonts.Após isso apaguei quase toda a escrita contida dentro
do component.html do meu app. Como eu disse apaguei quase tudo, ou seja, deixei só o
<router-outlet></router-outlet>

Além dos componentes e modules gerados, temos outros arquivos criados:

![image](https://user-images.githubusercontent.com/98665329/209446966-d8cc9f29-7912-4121-9609-14fb43a6b5e9.png)

Esses três arquivos são responsáveis pela configuração automática do JavaScript no projeto.

Agora vamos falar desse outro que é usado para realizar testes unitários

![image](https://user-images.githubusercontent.com/98665329/209447030-20476632-0adf-4592-8d1c-dfc482cf20cc.png)


Todo componente gerado no Angular, gera o arquivo abaixo
![image](https://user-images.githubusercontent.com/98665329/209447166-8130cb42-cca8-4849-aa89-6c35a337b42f.png) que é o nosso arquivo de teste.





![portugues](https://user-images.githubusercontent.com/98665329/207726923-15719394-0827-4576-8269-7d42be95396a.PNG)


![ingles](https://user-images.githubusercontent.com/98665329/207726937-bce02733-25cf-44bb-b58d-8ba0901429de.PNG)


![espanhol](https://user-images.githubusercontent.com/98665329/207726959-6aeead59-b916-498e-adb4-067b4f9580cf.PNG)
