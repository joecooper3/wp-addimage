import React, { useContext } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../context/OptionsContext';

import { black, blue, white, arimo, code } from '../styles';

const CropRadio = () => {
  const options = useContext(OptionsContext);
  const { changeCrop } = options;
  return (
    <RadioContainer>
      <Title>Hard crop?</Title>
      <Input id="yes" name="hardCrop" value="yes" type="radio" onChange={() => changeCrop(true)} />
      <Label htmlFor="yes">Yes</Label>
      <Input id="no" name="hardCrop" value="no" type="radio" onChange={() => changeCrop(false)} />
      <Label htmlFor="no">No</Label>
    </RadioContainer>
  );
};

export default CropRadio;

const RadioContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 300px;
`;

const Title = styled.h3`
  font-family: ${arimo};
  text-transform: uppercase;
  color: ${blue};
  font-size: 13px;
  letter-spacing: 0.5px;
  flex-basis: 100%;
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
