import React, { Component } from 'react';
import styled from 'styled-components';

import { GlobalStyle, blue, white } from './styles';
import { OptionsContext } from './components/OptionsContext';

import FormContainer from './components/FormContainer';

class OptionsProvider extends Component {
  state = {
      name: 'sample-name',
      width: null,
      height: null,
      hardCrop: false
  }

  changeName = (inp) => {
    this.setState({
      name: inp.target.value
    })
  }

render() {
  return (
    <OptionsContext.Provider
      value={{
          options: this.state,
          changeName: this.changeName
      }}
    >
        {this.props.children}
    </OptionsContext.Provider>
  )
}
}

class App extends Component {
  render() {
    return (
      <OptionsProvider>
        <Container>
          <GlobalStyle />
          <Title>WordPress Add Image Size Generator</Title>
          <FormContainer />
        </Container>
     </OptionsProvider>
    );
  }
}

export default App;

const Container = styled.div`
  display: grid;
  margin: 30px;
  width: 100%;
  max-width: calc(100vw - 60px);
  grid-template-columns: 1fr 1fr;
`

const Title = styled.h1`
  font-size: 50px;
  display: inline;
  box-sizing: border-box;
  grid-column: 1 / 3;
  padding: 10px 30px;
  color: ${blue};
  font-family: 'Playfair Display', serif;
  width: 100%;
  background: ${white};
`
