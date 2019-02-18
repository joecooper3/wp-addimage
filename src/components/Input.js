import React, { Component } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../context/OptionsContext';
import { blue } from '../styles';

class Input extends Component {
  render() {
    const { name, type } = this.props;
    const idName = name.replace(/\s+/g, '-').toLowerCase();
    return (
      <OptionsContext.Consumer>
        {context => (
          <InputContainer>
            <label htmlFor={idName}>{name}</label>
            <Field id={idName} type={type} onChange={context.changeName} />
          </InputContainer>
        )}
      </OptionsContext.Consumer>
    );
  }
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const Field = styled.input`
  width: 200px;
  color: ${blue};
  padding: 15px 20px;
  font-size: 20px;
`;
