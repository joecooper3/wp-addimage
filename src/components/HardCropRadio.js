import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../context/OptionsContext';

import { radioInput, radioLabel, labelText } from '../styles';

const HardCropRadio = () => {
  const options = useContext(OptionsContext);
  const refYes = useRef();
  const refNo = useRef();
  const { changeHardCrop } = options;
  const { width, height } = options.options;

  // need to unselect the radio buttons if a user removes the height and width
  useEffect(() => {
    if (!width && !height) {
      refYes.current.checked = false;
      refNo.current.checked = false;
    }
  });

  return (
    <RadioContainer>
      <Title>Hard crop?</Title>
      <Input
        id="yes"
        name="hardCrop"
        ref={refYes}
        value="yes"
        type="radio"
        onChange={() => changeHardCrop(true)}
        disabled={!width && !height}
      />
      <Label htmlFor="yes">Yes</Label>
      <Input
        id="no"
        name="hardCrop"
        ref={refNo}
        value="no"
        type="radio"
        onChange={() => changeHardCrop(false)}
        disabled={!width && !height}
      />
      <Label htmlFor="no">No</Label>
    </RadioContainer>
  );
};

export default HardCropRadio;

const RadioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-self: start;
  width: 300px;
`;

const Title = styled.h3`
  ${labelText()}
  flex-basis: 100%;
  margin: 10px 0 10px 0;
`;

const Input = styled.input`
  ${radioInput()}
`;

const Label = styled.label`
  ${radioLabel()}
`;
