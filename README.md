<h1> # Desafio Front-End BeTalent </h1>

Este repositório contém a solução para o desafio técnico de Front-End proposto pela BeTalent. O objetivo do desafio é construir a visualização de uma tabela com dados simulados provenientes de uma API utilizando **React.js** (ou **Vanilla JS**).

<h2> ## Descrição do Projeto </h2>

A aplicação exibe uma tabela com dados de usuários e permite a filtragem das informações. Os dados são fornecidos por meio de uma **API simulada** (json-server). A visualização é responsiva e foi construída utilizando React.js, com foco em boas práticas de organização de código e estrutura.

<h3> ### Funcionalidades </h3>

- Visualização de uma tabela com as seguintes colunas:
  - **Imagem**: Miniatura do usuário
  - **Nome**: Nome completo do usuário
  - **Cargo**: Cargo do usuário na empresa
  - **Data de Admissão**: Data de admissão do usuário
  - **Telefone**: Número de telefone do usuário
- **Filtragem de dados**: Permite buscar usuários por nome, cargo ou telefone.
- A tabela é responsiva, adaptando-se tanto para dispositivos desktop quanto mobile.
- A data de admissão e os números de telefone são formatados no front-end.

<h2> ## Pré-Requisitos </h2>

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

<h2> ## Como Rodar o Projeto </h2>

<h3> ### 1. Clonar o Repositório </h3>

Primeiro, clone o repositório para sua máquina:
git clone https://github.com/DevThiagoGab/Tabela-de-Funcionarios/

<h3> ### 2. Instalar Dependências </h3>

Entre na pasta do projeto e instale as dependências com o Yarn (ou npm):

cd desafio-front-end
yarn install
Ou, caso esteja usando npm:
npm install

<h3> ### 3. Rodar o json-server </h3>

Inicie a API simulada (json-server) com o comando abaixo. Entre na pasta da API, API-BeTalent, em sua máquina, e, por meio da linha de comando, execute o comando json-server --watch db.json, para consumir a API simulada;

<h3> ### 4. Rodar o Projeto React </h3>

Entre na pasta da tabela, table, em sua máquina, e execute o comando npm run dev para rodar o projeto.

<h2> ## Estrutura do Projeto </h2>

A estrutura do projeto está organizada da seguinte maneira:

1. **`/API-BeTalent`**:
   - **`db/`**: Contém os dados simulados para a API (arquivo JSON).
   - **`package.json`** e **`package-lock.json`**: Arquivos de configuração do **json-server**, para gerenciar as dependências da API.

2. **`/table`**:
   - **`/node_modules`**: Contém as dependências do projeto React.
   - **`/public`**: Contém os arquivos públicos, como o `index.html` e imagens gerais do projeto.
   - **`/src`**:
     - **`/pages/home`**: Contém os arquivos da página principal do projeto.
       - **`imgs/`**: Imagens utilizadas na página.
       - **`Funcionarios.js`**: Script responsável por buscar e filtrar os dados da API.
       - **`index.jsx`**: Componente principal da página `home`.
       - **`style.css`**: Arquivo CSS com os estilos específicos para a página.
     - **`index.css`**: Arquivo CSS global com estilos para todo o projeto.
     - **`main.jsx`**: Arquivo de inicialização do React, onde o aplicativo começa.
     - **`.gitignore`**: Arquivo que define quais arquivos/pastas devem ser ignorados pelo Git.

3. **`README.md`**: Este arquivo, contendo informações gerais sobre o projeto e instruções de uso.


Se precisar de mais informações ou quiser discutir sobre o código, fique à vontade para entrar em contato.

Email: thiagogabriel1904@gmail.com
LinkedIn: https://www.linkedin.com/in/devthiagogabriel/
