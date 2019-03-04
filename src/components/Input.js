import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { black, blue, white, arimo, code } from '../styles';
import { formatName } from '../helpers';

import { OptionsContext } from '../context/OptionsContext';

const Input = props => {
  const { name, type, keyName } = props;
  const idName = formatName(name).toLowerCase();
  const options = useContext(OptionsContext);
  const { changeName, changeNumber } = options;

  const [localValue, setLocalValue] = useState('');

  const changeNameLocal = inp => {
    const value = formatName(inp.target.value);
    setLocalValue(value);
    changeName(value);
  };

  const changeNumberLocal = (key, inp) => {
    const value = inp.target.value > 9999 ? 9999 : inp.target.value;
    setLocalValue(value);
    changeNumber(key, value);
  };

  return (
    <InputContainer>
      <Label htmlFor={idName}>{name}</Label>
      {type === 'number' ? (
        <Field
          id={idName}
          type={type}
          min="0"
          max="9999"
          onChange={e => changeNumberLocal(keyName, e)}
          value={localValue}
        />
      ) : (
        <Field
          id={idName}
          type={type}
          min="0"
          max="9999"
          onChange={e => changeNameLocal(e)}
          value={localValue}
        />
      )}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  grid-column: 1 / 2;
`;
const Label = styled.label`
  text-transform: uppercase;
  color: ${blue};
  font-family: ${arimo};
  font-size: 13px;
  font-weight: 700;
  margin: 10px 0 2px 0;
  letter-spacing: 0.5px;
`;
const Field = styled.input`
  width: 200px;
  color: ${blue};
  background: ${white};
  border: 1px solid ${black};
  padding: 12px 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: ${code};
`;
