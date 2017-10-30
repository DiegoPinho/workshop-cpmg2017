# Passos para criação do Projeto

- Instalar o node/npm na máquina
- Instalar o create-react-app globalmente na máquina > npm install -g create-react-app
- Criar o projeto inicial > create-react-app clima-tempo
- Instalar o boostrap > npm install --save boostrap
- Instalar o react-boostrap > npm install --save react-boostrap
- Colocar as dependências do bootstrap no index.js

``` javascript
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```

- Adicionar o font awesome no `index.html`

``` html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
```

- Inserir CSS no index.css

``` css 
body {
  margin: 10px;
  padding: 0;
  font-family: sans-serif;
}

#navio {
  position: relative;
  animation-name: navegar;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes navegar {
  0%   { left:0px; top:0px; }
  100%  { left:10px; top:0px; }
}
```

- Código do canvas 

``` javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#235ACE"; // azul
ctx.fillRect(0, 0, 555, 160);
```

- Criar componentes na sequencia: App > Navio > Controles. A partir dai, começar a conectar tudo.