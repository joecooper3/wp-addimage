import React, { useContext } from 'react';
import styled from 'styled-components';

import { black, blue, white, code, rubik, playfair } from '../styles';

import { OptionsContext } from '../context/OptionsContext';

const Input = props => {
  const { name, type, keyName } = props;
  const idName = name.replace(/\s+/g, '-').toLowerCase();
  const options = useContext(OptionsContext);
  const { changeValue } = options;

  return (
    <InputContainer>
      <Label htmlFor={idName}>{name}</Label>
      {type === 'number' ? (
        <Field id={idName} type={type} min="0" max="9999" onChange={e => changeValue(keyName, e)} />
      ) : (
        <Field id={idName} type={type} min="0" max="9999" onChange={e => changeValue(keyName, e)} />
      )}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const Label = styled.label`
  text-transform: uppercase;
  color: ${blue};
  font-family: ${rubik};
  font-size: 12px;
  margin: 10px 0 2px 0;
`;
const Field = styled.input`
  width: 200px;
  color: ${blue};
  background: ${white};
  border: 1px solid ${black};
  padding: 15px 10px;
  font-size: 20px;
  font-family: ${code};
`;
