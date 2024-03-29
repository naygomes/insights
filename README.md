<p align="center">
    <img src="./frontend/src/assets/brand-insights@3x.svg" height="70" alt="duet logo"/>
    <br/>
</p>
<br/>
<br/>

  
![Badge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Badge](https://img.shields.io/badge/Bootstrap-7410f0?style=for-the-badge&logo=bootstrap&logoColor=white)
![Badge](https://img.shields.io/badge/Material-fb8c00?style=for-the-badge&logo=material-design&logoColor=white)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 
![Badge](https://img.shields.io/badge/Express.js-1b1d20?style=for-the-badge&logo=express&logoColor=white)
![Badge](https://img.shields.io/badge/sqlite-3498DB?style=for-the-badge&logo=sqlite&logoColor=white) 
![Badge](https://img.shields.io/badge/sequelize-31426b?style=for-the-badge&logo=sequelize&logoColor=white) 


## O que é o Insights?
O Insights é um projeto proposto pela equipe da Globo para os candidatos e candidatas do seu processo seletivo. A ideia do Insights é que ele seja um app mobile para criação de Cards de conteúdo esportivos (Insights).

## Status do projeto
  <h4 align="center"> 
	🚧  Projeto em construção...  🚧
  </h4>

## Conteúdo
 * Pré-requisitos
 * Interace HTTP REST API
 * CLI para importação dos cards
 * Interface WEB
 * Autora
 
## Pré-requisitos

- Instalação Node
- Instalação de ferramenta para fazer as requisições na API (Insomnia, Postman)	

- Clone o projeto em seu computador:
``` bash
$ git clone https://github.com/naygomes/insights.git
```

## Interface HTTP REST API

+ Estando dentro da pasta 'insights', entre na pasta 'backend' e execute o seguinte comando no terminal:
``` bash
$ npm install
```
+ Agora, execute o seguinte comando no terminal para fazer uma cópia do *.env*:
``` bash
$ cp .env.example .env
```
+ Abra o arquivo *.env* e, no campo 'DB_HOST', adicione o seguinte caminho:
``` bash
DB_HOST=/insights/backend/
```
+ A seguir, rode o comando abaixo para migrar as tabelas para a base de dados:
``` bash
$ npm run migrate
```
+ Por fim, execute o seguinte comando para servir o projeto:
``` bash
$ npm run start
```
*OBS: Para servir o projeto no modo dev, execute o comando abaixo.*
``` bash
$ npm run dev
```

## CLI para importação dos cards

+ Estando dentro da pasta 'insights', entre na pasta 'cli' e execute o seguinte comando para instalar as dependências do projeto:
``` bash
$ npm install
```
Existe um arquivo csv na pasta 'cli' chamado 'cards'. Nesse arquivo contém alguns dados pré-definidos para teste. Para usar outros dados, existem duas opções;
- Apagar o arquivo *cards.csv* e adicionar o arquivo na mesma pasta, renomeando-o para *cards.csv*;
- Copiar todo o conteúdo do arquivo desejado e colar no *cards.csv*, não esquecendo de apagar todos os dados de teste. 

+ Agora, basta executar o projeto com o seguinte comando:
``` bash
$ npm run start
```
Pronto! Agora os dados do arquivo estão cadastrados no banco.

## Interface WEB

Como no protótipo, o projeto foi baseado em telas de dispositivos mobile, e recomenda-se testá-lo em telas de smartphones, em especial Iphone Xr, Iphone 11 pro max, etc.

+ Caso ainda não tenha o Angular instalado, basta rodar o seguinte comando no terminal;
``` bash
$ npm install -g @angular/cli
```
+ Estando dentro da pasta 'insights', entre na pasta 'frontend' e execute o seguinte comando no terminal:
``` bash
$ npm install
```
+ Para servir, basta executar o seguinte comando no terminal:
``` bash
$ ng serve
```

Após finalizar a compilação, abra o seu prompt de comando e execute o seguinte comando:
``` bash
$ start chrome --user-data-dir="C:/Chrome dev session" --disable-web-security
```
Esse comando abrirá uma janela do Google Chrome que desabilita a CORS, permitindo com que as requisições possam ser feitas pelo app.

Na janela do navegador que acabamos de abrir, pressione a tecla F12. Em seguida, no campo 'dimensão' na parte superior, escolha a opção "iphone Xr" ou outro smartphone. Por fim, digite o endereço <a href="http://localhost:4200/">http://localhost:4200/</a>.

---
## Autora
 <img style="border-radius: 50px;" src="./frontend/src/assets/nayara.jpeg" width="100" alt="foto da autora"/>
 <br />
 
 Nayara Gomes<br/>
 <sub><b>Desenvolvedora Jr</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-Nayara-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nayara-gomes-15727756/)](https://www.linkedin.com/in/nayara-gomes-15727756/) 
[![Gmail Badge](https://img.shields.io/badge/-nayara.gomes13@poli.ufrj.br-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:nayara.gomes13@poli.ufrj.br)](mailto:nayara.gomes13@poli.ufrj.br)

