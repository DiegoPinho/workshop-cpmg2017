import React, {Component} from 'react';
import NavioImagem from './NavioImagem.png';

const climas = new Map();
climas.set('sol', '#97B1FF');
climas.set('chuva', '#2C334A');
climas.set('nublado', '#6171A3');

class Navio extends Component {

  componentDidMount() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#235ACE"; // azul
    ctx.fillRect(0, 0, 555, 160);
  }

  getClima(clima) {
    return climas.get(clima);
  }
  
  render() {
    const clima = this.getClima(this.props.clima);
    const cor = {backgroundColor: clima};
    return (
      <div style={cor}>
        <img id="navio" src={NavioImagem} alt="navio"/>
          <canvas id="myCanvas" width="555" height="160"></canvas>
      </div>
    )
  }

}

export default Navio;