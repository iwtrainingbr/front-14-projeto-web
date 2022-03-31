# Projeto Web 

### Baixando a aplicação
- `git clone https://github.com/iwtrainingbr/front-14-projeto-web.git`

### Instalando as dependencias
- `cd front-14-projeto-web`
- `npm install`
- `npm install -g json-server`

### Subindo o servidor do banco de dados
No diretório da aplicação, crie um novo arquivo chamado `db.json` e copie para ele o conteúdo do arquivo `db.json.dist` 

Execute no terminal:
```shell
npx json-server --watch db.json --port 8000
```

### Executando a aplicação
Abra o arquivo `index.html` com o navegador web
