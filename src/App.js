import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Navio from './Navio';
import Controles from './Controles';

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      'clima': 'sol'
    }

    this.mudaClima = this.mudaClima.bind(this);
  }

  mudaClima(clima) {
    this.setState({clima});
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}><Navio clima={this.state.clima}/></Col>
          <Col md={6}><Controles callback={this.mudaClima} /></Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
