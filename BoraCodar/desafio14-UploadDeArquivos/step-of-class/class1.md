# Backend da aplicação

Pra começar instala o yarn
```bash
sudo apt install yarn nodejs
```

Depois vamos criar o package.json
```bash
yarn init -y
```

Em seguida vamos instalar o **express**, **morgan** que é uma biblioteca para fazer log de requisições http, e vamos instalar também o **mongoose** que é uma lib para lidar com banco de dados MongoDB, e o **multer** para manipular requisições de multi part form que são requisiçoes que pode trazer arquivos
```bash
yarn add express morgan mongoose multer
```

cria uma pasta **src** e nela o arquivo **index.js** e nesse arquivo vamos importar o express 
```javascript
const express = require('express');

// instancia servidor express
const app = express();

// define rota
app.get('/', (req, res) => {
  return res.send("Hello World!")
})

// define a  porta que o servidor vai ouvir
app.listen(3000)
```
para executar no navegador
```bash
node src/index.js
```

Agora vamos criar um arquivo para conter as rotas **routes.js** e dentro dele
```javascript
const routes = require('express').Router()
```
e para que essas rotas possam ser exportadas, utilizadas em outros arquivos da aplicação
```javascript
module.exports = routes
```

e a rota criada dentro do index passando para cá trocando app por routes, **res.send** para **res.json**
```javascript
  return res.json({hello: "World"})
```

Porque vamos usar o padrão Restfull para que transmita essas informações entre backend e frontend através da formatação json. E no arquivo index 
```javascript
app.use(require('./routes'))
```

e se reiniciar o servidor e no navegador dá um F5, vai aparcer a minha chave json lá. No arquivo index vamos passar
```javascript
// para express lidar com dados no formato json
app.use(express.json())
```

e também
```javascript
// para conseguir lidar com  padrões urlencoded
app.use(express.urlencoded({extended: true}))
```

vamos importar o morgan
```javascript
const morgan = require('morgan')
```

e vamos usar morgan
```javascript
app.use(morgan('dev'))
```

E para ver esse morgan entrando em ação, no terminal dá um reload na applicação e dá f5 na página e veremos algumas informações no terminal. pra não ficar reinicializando a aplcação vamos utilizar o nodemon
```bash
yarn add nodemon -D
```

E no arquivo package.json
```javascript
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
```

Criamos dois scripts porque quando subimos uma aplicação online não vamos precisar mais do nodemon. Salvo e no terminal executo
```bash
yarn dev
```

vamos abrir o insminia e criar uma requisição Get, passamos para ela rota **http://localhost:3000** e clica em **Send** .

Agora vamos configurar o upload da aplicação, dentro do projeto mesmo(por enquanto), na pasta **src** vamos criar uma pasta chmada **config** e nela o arquivo **multer** e nele vamos importar as configurações que eu preciso do meu multer para ele funcionar 
```javascript
module.exports = {
  
}
```
no arquivo routes vamos alterar a rota do método get para o método post e ela vai receber o nome de posts
```javascript
// define rota
routes.post('/posts', multer().single,(req, res) => {
  return res.json({ hello: 'Rocket' })
})
```
e para eu conseguir utilizar o multer dentro dessa rota, no arquivo routes.js eu preciso importar o multer
```javascript
const multer = require('multer')
```

dentro da rota geralmente usamos middle1 middler2, mas vamos usar somente o multer já qu ele é middle
```javascript
// define rota
routes.post('/posts', multer().single('file'),(req, res) => {
  return res.json({ hello: 'Rocket' })
```

Quando queremos que faça um upload de arquivo por vez usamos o single, caso queiramos fazer upload de mais de um arquivo por vez utilizamos o método array. Quando fazemos o upload de multiplos arquivos perdemos o progresso de cada arquivo, para cada imagem que o usuário subir, o upload será separado para conseguir saber o progresso de cada um idependente do resultado dos outros.

E no multer vamos precisar das  configurações 
```javascript
const multerConfig = require('./config/multer')
```

E então eu passo variável como argumento para multer
```javascript
routes.post('/posts', multer(multerConfig).single('file'),(req, res) => {
```

No arquivo mmulter.js importamos o multer, o path e o crypto
```javascript
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
}

```

E a primeira configuração é uma variável **dest** que vai definir o destino desses arquivos, onde o **__dirname** se refere ao diretŕio **config**, as imagens vão descer dois caminhos, abre a pasta **temp** abre e para na pasta uploads
```javascript
module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads')
}
```

vamos criar uma pasta temps na raiz do projeto e dentro dela vamos criar a pasta uploads. Agora vamos criar outra configuração chamada storage
```javascript
  storage: multer.diskStorage({}),
```
também o a configuração limits, definir limites para o arquivivo, como tamanho, limite de arquivo, e vamos definir o limite de tamanho do arquivo que é o fileSize, se eu quero que sej a megs, como ali em bytes eu passo como argumento 2 e multiplico por 1024 para ficar em kbites e soma mais 1024 para ficar em megabytes
```javscript
  limits: 2 * 1024 + 1024,
```

Também vamos ter a opção que se chama fileFilter e esse fileFileter ele é uma função para poder filtrar o upload de arquivos o fileFilter ele recebe três parâmtros **req** requisição, o **file** onde eu poso pegar o nome do arquivo, o tipo dele. e como terceiro um **cb** um callback ele é uma função qua vamos chamara assim que terminaramos a vreificação 
```javascript
  fileFilter: (req, file, cb) => {
    //  define formatos aceitos de mime tyepes 
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',  
      'image/gif'
    ]

  }
```
 e nela vamos criar uma condição onde se allowedMimes incluir o arquivo mimetypes vamos cahamar o callback, e o callback recebe sempre como primeiro paraâmetro o erro, e como segundo parêmetro é o true 
 ```javascript
     // temos uma condição onde verifica se o arquivo passado está dentro dos formatos aceitos defindo pelo array allowedMimes se incluir ele retorna um callback passando como primeiro parâmetro nullo que é erro que é sempre o erro e o segundo parâmetro é true no caso de sucesso. E caso o formato desse arquimo não esteja em formato aceito pelo na lista ele vai retornar um erro dizendo que tipo de arquivo é inválido
    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalide file type.'))
    }
```

E no diskStorage vamos configurar duas coisas a primeira é destination e a segunda é o fileName
```javascript
    // temos uma condição onde verifica se o arquivo passado está dentro dos formatos aceitos defindo pelo array allowedMimes se incluir ele retorna um callback passando como primeiro parâmetro nullo que é erro que é sempre o erro e o segundo parâmetro é true no caso de sucesso. E caso o formato desse arquimo não esteja em formato aceito pelo na lista ele vai retornar um erro dizendo que tipo de arquivo é inválido
    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalide file type.'))
    }
```