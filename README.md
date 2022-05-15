- [Sobre](#-sobre-o-projeto)
- [Como executar](#-como-executar-o-projeto)
- [Tecnologias](#tecnologias)

<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

O <strong>Feedback Widget</strong> é uma aplicação para receber feedbacks de usuários.

Essa aplicação foi construída na <strong>Next Level Week Return</strong> feita pela [Rocketseat](https://rocketseat.com.br/).

<a id="-como-executar-o-projeto"></a>

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

```bash
# Clone o repositório
$ git clone https://github.com/LucasNaliato/FeedbackWidget

# Entre no repositório
$ cd FeedbackWidget
```

### Iniciando o back-end
```bash
# Entre na pasta do back-end
$ cd server

# Instale as dependências
$ npm install

# Realize as migrações do banco de dados
$ npx prisma migrate dev 

# Inicie a aplicação
$ npm start
```

### Iniciando o front-end
```bash
# Entre na pasta do front-end
$ cd web

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm run dev
```

### Iniciando o mobile
```bash

# Entre na pasta do mobile
$ cd mobile

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```

<a id="tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [SQLite](https://www.sqlite.org/index.html)

---

#### Feito com ❤️ por Lucas Naliato.