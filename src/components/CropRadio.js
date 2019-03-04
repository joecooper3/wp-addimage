import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../context/OptionsContext';

import { black, blue, white, arimo } from '../styles';

const CropRadio = () => {
  const options = useContext(OptionsContext);
  const refYes = useRef();
  const refNo = useRef();
  const { changeCrop } = options;
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
        onChange={() => changeCrop(true)}
        disabled={!width && !height}
      />
      <Label htmlFor="yes">Yes</Label>
      <Input
        id="no"
        name="hardCrop"
        ref={refNo}
        value="no"
        type="radio"
        onChange={() => changeCrop(false)}
        disabled={!width && !height}
      />
      <Label htmlFor="no">No</Label>
    </RadioContainer>
  );
};

export default CropRadio;

const RadioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-self: start;
  width: 300px;
`;

const Title = styled.h3`
  font-family: ${arimo};
  text-transform: uppercase;
  color: ${blue};
  font-size: 13px;
  letter-spacing: 0.5px;
  flex-basis: 100%;
  margin: 10px 0 10px 0;
`;

const Input = styled.input`
  left: -99999px;
  position: absolute;

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    position: absolute;
    height: 14px;
    width: 14px;
    top: 4px;
    left: 4px;
    background: ${blue};
    border-radius: 100%;
    transition: 0.2s all;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }

  &:focus + label:before {
    outline: ${blue} auto 2px;
  }

  &:disabled + label {
    color: #aeaeae;
    cursor: not-allowed;
  }

  &:disabled + label:before {
    opacity: 0.4;
  }
`;

const Label = styled.label`
  cursor: pointer;
  position: relative;
  font-family: ${arimo};
  padding: 4px 15px 0 28px;
  font-size: 13px;
  font-weight: bold;
  &:before {
    content: '';
    height: 20px;
    width: 20px;
    background: ${white};
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    border: 1px solid ${black};
  }
`;
