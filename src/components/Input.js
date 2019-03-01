import React, { useContext } from 'react';
import styled from 'styled-components';

import { blue } from '../styles';

import { OptionsContext } from '../context/OptionsContext';

const Input = props => {
  const { name, type, keyName } = props;
  const idName = name.replace(/\s+/g, '-').toLowerCase();
  const options = useContext(OptionsContext);
  const { changeValue } = options;

  return (
    <InputContainer>
      <label htmlFor={idName}>{name}</label>
      <Field id={idName} type={type} onChange={e => changeValue(keyName, e)} />
    </InputContainer>
  );
};

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
