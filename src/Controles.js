import React,{Component} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

class Controles extends Component {

  constructor(props) {
    super(props);
    
    this.alteraClima = this.alteraClima.bind(this);
  }
  
  alteraClima(e) {
    this.props.callback(e.target.value);
  }

  buildButtons() {
    return (
      <ButtonGroup vertical block>
        <Button bsSize="large" onClick={this.alteraClima} value="sol"><i className="fa fa-sun-o" aria-hidden="true"></i> Sol</Button>
        <Button bsSize="large" onClick={this.alteraClima} value="chuva"><i className="fa fa-tint" aria-hidden="true"></i> Chuva</Button>
        <Button bsSize="large" onClick={this.alteraClima} value="nublado"><i className="fa fa-cloud" aria-hidden="true"></i> Nublado</Button>
      </ButtonGroup>
    );
  }
  
  render() { 
    const buttons = this.buildButtons();
    return(
      <div>
        <h1>Clima</h1>
        {buttons}
      </div>
    )
  }
}

export default Controles;