import React, { Component } from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './styles';
import { OptionsContext } from './context/OptionsContext';
import OptionsProvider from './context/OptionsProvider';

import FormContainer from './components/FormContainer';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <OptionsProvider>
        <Container>
          <GlobalStyle />
          <Title />
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
`;
