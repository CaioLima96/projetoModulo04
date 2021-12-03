# API - Hotel Resilia Palace
## 🏨 Dependências do projeto:
  **Node.JS**
- Para inicializar o projeto precisamos do Node.JS instalado na máquina, entre nesse [link](https://nodejs.org/en/) e baixe a versão LTS referente ao seu sistema operacional.
- Quando terminar a instalação, confirme se ocorreu tudo bem abrindo o shell/interpretador do seu computador e digite o comando abaixo, se aparecer a versão que você instalou, então ele já está pronto para ser usado:
```bash
node -v
```

***
- Agora será necessário instalar as dependências do projeto. Abra o terminal **_dentro da pasta do projeto_** e execute o seguinte:
```bash
npm install
```

***
## 🏩 Execução do projeto:
- Depois de instalar todas as dependências, você deve executar o arquivo de banco de dados:
```bash
node src/infra/create-and-populate.js
```
- Você já pode executar o projeto e assim o servidor local já estará rodando:
```bash
npm run dev
```
ou
```bash
npm start
```
