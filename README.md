
:pushpin: Requisitos:

1) A lista de tecnologias deve ser um array onde no HTML você irá fazer um map para listar

2) Ao clicar no botão de linguagem  o texto de apresentação "Olá meu nome...." muda para
a linguagem selecionada

3) O botão de linguagem  deve ser um componente onde você passará 3 propriedades: Título,
ícone e o click dele

4) Esse projeto foi feito em Angular e para sua estilização utilizei o Saas.

![icons8-angularjs-96](https://user-images.githubusercontent.com/98665329/209447866-60be6467-21b1-4bcf-80f5-5461672606d7.png)
![icons8-reaccionar-80 (1)](https://user-images.githubusercontent.com/98665329/209447955-21ed9b80-f5cb-4ef3-9ff0-2f6334dcc318.png)


A sigla  ![icons8-sass-96](https://user-images.githubusercontent.com/98665329/209448163-190c29d1-5e4a-4399-b3b0-e2b6319a17dc.png) significa “Syntactically Awesome Style Sheets” – ou seja, Folhas de Estilo com Sintaxe Espetacular.


A ideia é manter a mesma lógica do CSS (seletores, regras etc), mas de uma maneira mais organizada, intuitiva e com trechos de código facilmente reutilizáveis.

Com o SASS, é muito mais fácil desenvolver um projeto grande e não se perder no meio de tanto código.
   


# Passo a Passo do Projeto:
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

- component.html,
* component.scss,
+ component.spec.ts,
- component.ts.

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


Todo componente gerado no Angular, gera o arquivo

![image](https://user-images.githubusercontent.com/98665329/209447166-8130cb42-cca8-4849-aa89-6c35a337b42f.png) 
que é o nosso arquivo de teste.

![image](https://user-images.githubusercontent.com/98665329/209447218-85e03a2a-15bd-45fd-a86d-6ad33280a129.png)
serve para reconhecer os arquivos que criamos


# Funcionalidades 

Para esse projeto foram criados 3 componentes a qual dei o nome de botao,header e home.

- botao => responsável pela acão de mudança de idioma conforme o botão escolhido através da função criada para esse objetivo

![image](https://user-images.githubusercontent.com/98665329/209449663-3ba38117-9849-4187-9a2d-a14d50b49b46.png)
   
    1º Criei uma Variável com o nome de tradução  e atribui a mensagem principal e atual do texto,
   
    public traducao = 'Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:'
    
    2º Criei 3 funções uma para cada idioma a qual será modificada atráves do this. que mudará o estado atual da linguagem
    para a linguagem escolhida.
    
    english() {

    this.traducao = 'Hello, my name is Charlyes Souza Rodrigues and I am a Front-end developer, Technologies that I have experiences:'
    }
    portugues() {

    this.traducao = 'Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end, Tecnologias que tenho experiências:'
    }
    espanhol() {

    this.traducao = 'Hola, mi nombre es Charlyes Souza Rodrigues y soy desarrollador Front-end, Tecnologías que tengo experiencias:'
   }

![image](https://user-images.githubusercontent.com/98665329/209449957-3faf65c7-1b80-4231-bcfa-815ddaed3838.png)

 1º No botao.component.html,criei 3 div e dei o nome class de cada uma segundo o idioma(função) criado no botao.compontent.ts
 
 Esses nomes class serão utilizados para estilização no botao.component.scss. Existem outras tags criadas dentro de cada
 
 div que se refere a cada botão de idioma. Essas outras tags não precisaram de um nome class, pois atrávés da div principal que contem
 
 o nome class  elas serão estilizadas de forma encadeada.

![image](https://user-images.githubusercontent.com/98665329/209451014-5923ce89-b98e-4040-bc9b-e5bcfd8c0cf4.png)

Nesse componente se encontra a estilização feita de forma encadeada conforme o identificador de cada idioma que foi atribuída a uma div.

![image](https://user-images.githubusercontent.com/98665329/209451220-126989a3-7fa9-44c3-bff4-3f7de1806801.png)


const routes: Routes = [{ path: '', component: BotaoComponent }];

Quando nós trabalhamos com rotas, nós temos duas propriedades:

path: string que desejamos para a nossa rota, no nosso exemplo estamos utilizando botao.
component: passamos o nome do component que desejamos adicionar para a nossa rota.

![image](https://user-images.githubusercontent.com/98665329/209451449-2b8a2a88-bdd5-46bb-ac94-7ac4e7028b3d.png)

Podemos observar que na linha 3 estamos passando as nossas rotas para o RouterModule através do método forRoot e exportando elas no linha 2.

* header=> reponsável pelo cabeçalho do projeto

* home => ficou responsável pela lista de teconologias (array)

![image](https://user-images.githubusercontent.com/98665329/209451623-ab0658ea-79bd-4606-ad57-bb8a12c57cec.png)

Foram criadas 3 listas contendo as tecologias contidas no protótipo do projeto

![image](https://user-images.githubusercontent.com/98665329/209451871-13871f4f-08a3-499f-8264-bc574f4380ce.png)

Para conseguir percorrer a lista de array, utilizei o Ngfor que é uma diretiva Angular que permite percorrer um array, ou 
qualquer objeto iterável, e exibir cada item do array como elemento na tela.

![image](https://user-images.githubusercontent.com/98665329/209451923-d3c93c99-2bed-46fb-8bcc-7f3f820dab15.png)

Estilizando o projeto  conforme o identificador dado a tag no html


![portugues](https://user-images.githubusercontent.com/98665329/207726923-15719394-0827-4576-8269-7d42be95396a.PNG)


![ingles](https://user-images.githubusercontent.com/98665329/207726937-bce02733-25cf-44bb-b58d-8ba0901429de.PNG)


![espanhol](https://user-images.githubusercontent.com/98665329/207726959-6aeead59-b916-498e-adb4-067b4f9580cf.PNG)
