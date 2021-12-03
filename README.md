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

***
## 🛎️ Rotas do projeto:
- Nesse projeto foi utilizado o padrão de **_API Rest_** e as rotas consistem em duas partes: um método HTTP e um caminho para um recurso que será usado. Para esse projeto usamos os métodos HTTP baseados no **_CRUD_**.
- 
### Create - **POST**:
- A partir de uma ferramenta para consulta de requisições ([Postman](https://www.postman.com/) e [Insomnia](https://insomnia.rest/), você pode consultar a API por esse e outros métodos. Nesse caso, a requisição será feita escolhendo o método POST e informando a URL **_localhost:port/address_**.
- Verifique antes se o seu servidor está rodando, se não, não será possível testar esse e outros métodos. Depois de especificar a requisição, abra o **_body_** da mesma e escolha a opção **_JSON_** para inserir os dados que você quiser a partir das colunas existentes no banco. Após isso, clique em **_Send_** para mandar essa requisição:
![post]()

***
### Read - **GET**:
1. **GET/path**
- Com o servidor rodando e sua ferramenta escolhida aberta, você seleciona o método GET e ao lado a URL para a requisição, sendo ela: **_localhost:port/address_**. Ao clicar no botão **_Send_** ele retornará todos os dados da API:
![get]()

2. **GET/path/id**
- Não muito diferente da requisição acima, o método também será o GET porém depois do caminho será aplicado o **_ID_** de um registro, para o caso de precisar verificar algum registro específico. Com o método GET selecionado e a URL digitada, após ela você adiciona **_/1_** (Em nossa api o ID será gerado pelo UUID, copie o ID exibido no método anterior):
![getid]()

***
### Update - **PUT**:
- Nesta API foi utilizada somente requisições PUT para atualizações. Ao lado da URL você precisará informar também um **_ID_**, para servir de referência a qual dado será modificado:
![put]()

***
### Delete - **DELETE**:
- O método DELETE tem a função de remover algum recurso que foi especificado, no caso das nossa requisições ele irá deletar o **_ID_** informado após a URL passada:
![delete]()

***
### Se você preferir, pode baixar esse arquivo com todas as rotas prontas (feitas no insomnia).
[link]()

***
## 🛌 Considerações finais:
- 

